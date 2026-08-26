import { useEffect, useState } from "react";

import HeroSectionForm from "./components/HeroSectionForm";
import AboutSectionForm from "./components/AboutSectionForm";
import CTASectionForm from "./components/CTASectionForm";
import ImageUploader from "./components/ImageUploader";

import {
  getHomepage,
  updateHomepage,
} from "../../services/homepage.service.js";

export default function HomepageSettings() {
  const [homepage, setHomepage] = useState({
    heroTitle: "",
    heroSubtitle: "",
    heroButtonText: "",
    heroButtonLink: "",

    aboutTitle: "",
    aboutDescription: "",

    ctaTitle: "",
    ctaDescription: "",
    ctaButtonText: "",
    ctaButtonLink: "",

    heroBackgroundImage: null,
    aboutImage: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHomepage();
  }, []);

  const fetchHomepage = async () => {
    try {
      const { data } = await getHomepage();

      setHomepage((prev) => ({
        ...prev,
        ...data.data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setHomepage((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(homepage).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      await updateHomepage(formData);

      alert("Homepage updated successfully.");
    } catch (error) {
      console.error(error);

      alert("Failed to update homepage.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Homepage CMS</h1>

        <p className="text-gray-500">Manage homepage content.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <HeroSectionForm homepage={homepage} onChange={handleChange} />

        <AboutSectionForm homepage={homepage} onChange={handleChange} />

        <CTASectionForm homepage={homepage} onChange={handleChange} />

        <ImageUploader homepage={homepage} onChange={handleChange} />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Homepage"}
        </button>
      </form>
    </div>
  );
}
