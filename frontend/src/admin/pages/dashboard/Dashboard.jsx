import { useEffect, useState } from "react";

import { FileText, Briefcase, Users, FolderOpen } from "lucide-react";

import StatsCard from "./components/StatsCard";

import { getDashboard } from "../../../services/dashboard.service";
import RecentBlogs from "./components/RecentBlogs";
import RecentJobs from "./components/RecentJobs";
import RecentApplications from "../../../admin/pages/dashboard/components/RecentApplication.jsx";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data } = await getDashboard();

      setDashboard(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-500">Welcome to Admin Panel</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Blogs"
          value={dashboard.stats.totalBlogs}
          icon={<FileText size={28} />}
          color="bg-blue-500"
        />

        <StatsCard
          title="Jobs"
          value={dashboard.stats.totalJobs}
          icon={<Briefcase size={28} />}
          color="bg-green-500"
        />

        <StatsCard
          title="Applications"
          value={dashboard.stats.totalApplications}
          icon={<Users size={28} />}
          color="bg-purple-500"
        />

        <StatsCard
          title="Categories"
          value={dashboard.stats.totalCategories}
          icon={<FolderOpen size={28} />}
          color="bg-orange-500"
        />

        <div className="grid gap-8 xl:grid-cols-2">
          <RecentBlogs blogs={dashboard.recentBlogs} />

          <RecentJobs jobs={dashboard.recentJobs} />
        </div>

        <RecentApplications applications={dashboard.recentApplications} />
      </div>
    </div>
  );
}
