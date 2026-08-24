import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import BlogSidebar from "../../components/blog/BlogSidebar.jsx";
import BlogSidebar from "../../components/blog/BlogSidebar.jsx";
import BlogCard from "../../pages/Blog/components/BlogCard.jsx";
import { getBlogBySlug, getRelatedBlogs } from "../../services/blog.service.js";
import { getCategories } from "../../services/category.service.js";


export default function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [categories, setCategories] = useState([]);

  const [recentPosts, setRecentPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    loadBlog();
  }, [slug]);

  const loadBlog = async () => {
    try {
      setLoading(true);

      const blogRes = await getBlogBySlug(slug);

      const blogData = blogRes.data.data;

      setBlog(blogData);

      const [relatedRes, categoryRes] = await Promise.all([
        getRelatedBlogs(blogData.categoryId, blogData.id),
        getCategories(),
      ]);

      setRelatedBlogs(relatedRes.data.data);

      setCategories(categoryRes.data.data);

      setRecentPosts(relatedRes.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="py-32 text-center">Loading...</div>;
  }

  if (!blog) {
    return <div className="py-32 text-center">Blog not found.</div>;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main */}

          <div className="lg:col-span-2">
            <img
              src={`${import.meta.env.VITE_API_URL}${blog.featuredImage}`}
              alt={blog.title}
              className="mb-8 h-[450px] w-full rounded-2xl object-cover"
            />

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-600">
              {blog.category?.name}
            </span>

            <h1 className="mt-6 text-5xl font-bold">{blog.title}</h1>

            <div className="mt-5 flex gap-6 text-gray-500">
              <span>{blog.author?.name}</span>
              <span>
                {new Date(
                  blog.publishedAt || blog.createdAt,
                ).toLocaleDateString()}
              </span>{" "}
            </div>

            <div
              className="prose prose-lg mt-10 max-w-none"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />

            {/* Related */}
            {relatedBlogs.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-3xl font-bold">Related Blogs</h2>

              <div className="grid gap-8 md:grid-cols-2">
                {relatedBlogs.map((item) => (
                  <BlogCard key={item.id} blog={item} />
                ))}
              </div>
            </div> )};
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
