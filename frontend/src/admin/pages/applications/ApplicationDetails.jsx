import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getApplicationById,
  updateApplicationStatus,
} from "../../../services/application.service.js";

export default function ApplicationDetails() {
  const { id } = useParams();

  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplication();
  }, []);

  const fetchApplication = async () => {
    try {
      const { data } = await getApplicationById(id);

      setApplication(data.data);
      setStatus(data.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusUpdate = async () => {
    try {
      setLoading(true);

      await updateApplicationStatus(id, status);

      alert("Status updated successfully");

      fetchApplication();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  if (!application) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Application Details</h1>

      <div className="bg-white rounded-xl shadow p-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Applicant Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="font-semibold">Full Name</label>

                <p>{application.fullName}</p>
              </div>

              <div>
                <label className="font-semibold">Email</label>

                <p>{application.email}</p>
              </div>

              <div>
                <label className="font-semibold">Phone</label>

                <p>{application.phone}</p>
              </div>

              <div>
                <label className="font-semibold">Applied Position</label>

                <p>{application.job?.title}</p>
              </div>

              <div>
                <label className="font-semibold">Applied On</label>

                <p>{new Date(application.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Cover Letter</h2>

            <div className="border rounded-lg p-4 min-h-[220px] whitespace-pre-wrap">
              {application.coverletter || "No cover letter submitted."}
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Resume</h2>

            <a
              href={`${import.meta.env.VITE_API_URL}/uploads/resumes/${application.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Resume
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Update Status</h2>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg p-3 w-full"
            >
              <option value="PENDING">Pending</option>

              <option value="REVIEWED">Reviewed</option>

              <option value="SHORTLISTED">Shortlisted</option>

              <option value="INTERVIEW">Interview</option>

              <option value="HIRED">Hired</option>

              <option value="REJECTED">Rejected</option>
            </select>

            <button
              onClick={handleStatusUpdate}
              disabled={loading}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Updating..." : "Update Status"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
