import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  House,
  FileText,
  BriefcaseBusiness,
  Image,
  MessageSquareQuote,
  Search,
  Settings,
  LogOut,
  FolderOpen,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Home CMS",
    path: "/admin/home",
    icon: House,
  },
  {
    title: "Blogs",
    path: "/admin/blogs",
    icon: FileText,
  },
  {
    title: "Blog Categories",
    icon: FolderOpen,
    path: "/admin/blog-categories",
  },
  {
    title: "Jobs",
    path: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gallery",
    path: "/admin/gallery",
    icon: Image,
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    title: "SEO",
    path: "/admin/seo",
    icon: Search,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold">Azzunique CMS</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive ? "bg-blue-600" : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
