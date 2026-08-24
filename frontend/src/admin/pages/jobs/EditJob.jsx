import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import JobForm from "./components/JobForm";

import { getJobById, updateJob } from "../../../services/job.service.js";

import { getCategories } from "../../../services/job.category.service.js";

export default function EditJob() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchJob();
    fetchCategories();
  }, []);

  const fetchJob = async () => {
    try {
      const { data } = await getJobById(id);

      setJob(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();

      setCategories(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      await updateJob(id, values);

      alert("Job updated successfully");

      navigate("/admin/jobs");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!job) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Job</h1>

        <p className="text-gray-500">Update job information.</p>
      </div>

      <JobForm
        initialData={job}
        categories={categories}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
