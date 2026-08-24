import { useEffect, useState } from "react";

import BlogCard from "../../pages/Blog/components/BlogCard.jsx";
import BlogSidebar from "../../components/blog/BlogSidebar.jsx";

import { getPublishedBlogs } from "../../services/blog.service.js";

import { getCategories } from "../../services/category.service.js";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const [recentPosts, setRecentPosts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalPages: 1,
  });

  useEffect(() => {
    fetchPageData();
  }, [page, search, selectedCategory]);

  const fetchPageData = async () => {
    try {
      setLoading(true);

      const [blogsRes, categoryRes] = await Promise.all([
        getPublishedBlogs({
          page,
          search,
          category: selectedCategory,
        }),
        getCategories(),
      ]);

      setBlogs(blogsRes.data.data);

      setPagination(blogsRes.data.pagination);

      setRecentPosts(blogsRes.data.data.slice(0, 5));

      setCategories(categoryRes.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">Our Blogs</h1>

          <p className="mt-4 text-gray-500">
            Explore our latest insights and articles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Blog List */}

          <div className="space-y-8 lg:col-span-2">
            {loading ? (
              <div className="text-center py-20">Loading Blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="rounded-xl bg-white p-10 text-center shadow">
                <h2 className="text-2xl font-semibold">No Blogs Found</h2>

                <p className="mt-3 text-gray-500">
                  Try changing your search or category.
                </p>
              </div>
            ) : (
              blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            )}

            {/* Pagination */}

            {pagination.totalPages > 1 && (
              <div className="flex justify-center gap-3 pt-6">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="rounded-lg border px-5 py-2 disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="flex items-center px-4 font-semibold">
                  {page} / {pagination.totalPages}
                </span>

                <button
                  disabled={page === pagination.totalPages}
                  onClick={() => setPage(page + 1)}
                  className="rounded-lg border px-5 py-2 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}

          <BlogSidebar
            search={search}
            setSearch={setSearch}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            recentPosts={recentPosts}
          />
        </div>
      </div>
    </section>
  );
}
