import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";

import { getJobs, deleteJob } from "../../../services/job.service";
import JobTable from "./components/JobTable";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalPages: 1,
  });

  useEffect(() => {
    fetchJobs();
  }, [page, search]);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const { data } = await getJobs({
        page,
        search,
      });

      setJobs(data.data.jobs);
      setPagination(data.data.pagination);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmed) return;

    try {
      await deleteJob(id);
      fetchJobs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>

          <p className="text-gray-500">Manage all job openings.</p>
        </div>

        <Link
          to="/admin/jobs/create"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Job
        </Link>
      </div>

      {/* Search */}

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Search Jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border py-2 pl-10 pr-4"
        />
      </div>

      {/* Table */}

      <JobTable jobs={jobs} loading={loading} onDelete={handleDelete} />

      {/* Pagination */}

      <div className="mt-6 flex justify-center gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="rounded border px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>
        

        <span className="px-4 py-2 font-semibold">
          {page} / {pagination.totalPages}
        </span>

        <button
          disabled={page === pagination.totalPages}
          onClick={() => setPage(page + 1)}
          className="rounded border px-4 py-2 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
