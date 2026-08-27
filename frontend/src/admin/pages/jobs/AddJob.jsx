import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobForm from "./components/JobForm.jsx";
import { createJob } from "../../../services/job.service.js";
import { getCategories } from "../../../services/category.service.js";

export default function AddJob() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

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

      await createJob(values);

      alert("Job created successfully");

      navigate("/admin/jobs");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Add Job</h1>

        <p className="text-gray-500">Create a new job opening.</p>
      </div>

      <JobForm
        // initialData={job}
        categories={categories}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
