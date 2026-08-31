import { useEffect, useState } from "react";
import {
  FileText,
  Briefcase,
  Users,
  FolderOpen,
  PlusCircle,
} from "lucide-react";
import StatsCard from "./components/StatsCard";
import RecentBlogs from "./components/RecentBlogs";
// import RecentJobs from "./components/RecentJobs";
import RecentApplications from "../../../admin/pages/dashboard/components/RecentApplication.jsx";
import { getDashboard } from "../../../services/dashboard.service";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState({
    stats: {},
    admin: null,
  });
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

  // Greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="space-y-8 p-6 animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 bg-gray-200 rounded-xl" />
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="h-64 bg-gray-200 rounded-xl" />
          <div className="h-64 bg-gray-200 rounded-xl" />
        </div>
        <div className="h-80 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  const { stats, admin } = dashboard;

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {/* Header with greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {getGreeting()}, {admin?.name || "Admin"}
          </h1>
          <p className="text-gray-500 mt-1">
            Here's what's happening with your website today.
          </p>
        </div>
        {/* Optional quick action button */}
        {/* <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-sm transition-colors">
          <PlusCircle size={20} />
          <span>Add New</span>
        </button> */}
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Blogs"
          value={stats?.totalBlogs || 0}
          icon={<FileText size={28} />}
          color="bg-blue-500"
        />
        <StatsCard
          title="Active Jobs"
          value={stats?.totalJobs || 0}
          icon={<Briefcase size={28} />}
          color="bg-green-500"
        />
        <StatsCard
          title="Applications"
          value={stats?.totalApplications || 0}
          icon={<Users size={28} />}
          color="bg-purple-500"
        />
        <StatsCard
          title="Categories"
          value={stats?.totalCategories || 0}
          icon={<FolderOpen size={28} />}
          color="bg-orange-500"
        />
      </div>

      {/* Recent Blogs & Jobs - side by side on large screens */}
      <div className="grid gap-8 lg:grid-cols-2">
        <RecentBlogs blogs={dashboard.recentBlogs || []} />
        <RecentJobs jobs={dashboard.recentJobs || []} />
      </div>

      {/* Recent Applications - full width */}
      <RecentApplications applications={dashboard.recentApplications || []} />
    </div>
  );
}
