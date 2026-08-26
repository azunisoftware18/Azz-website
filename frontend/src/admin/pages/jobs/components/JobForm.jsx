import { useState } from "react";

export default function JobForm({
  initialData = {},
  categories = [],
  loading,
  onSubmit,
}) {
  const [form, setForm] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    location: initialData.location || "",
    experience: initialData.experience || "",
    salary: initialData.salary || "",
    vacancies: initialData.vacancies || 1,
    employmentType: initialData.employmentType || "FULL_TIME",
    categoryId: initialData.categoryId || "",
    status: initialData.status || "DRAFT", 
    lastDate: initialData.lastDate ? initialData.lastDate.substring(0, 10) : "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">Job Title</label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Description</label>

        <textarea
          rows={8}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label>Location</label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Experience</label>

          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div>
          <label>Salary</label>

          <input
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Vacancies</label>

          <input
            type="number"
            name="vacancies"
            value={form.vacancies}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Last Date</label>

          <input
            type="date"
            name="lastDate"
            value={form.lastDate}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div>
          <label>Employment Type</label>

          <select
            name="employmentType"
            value={form.employmentType}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="CONTRACT">Contract</option>
            <option value="FREELANCE">Freelance</option>
          </select>
        </div>

        <div>
          <label>Category</label>

          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Status</label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
      </div>

      <button
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Job"}
      </button>
    </form>
  );
}
