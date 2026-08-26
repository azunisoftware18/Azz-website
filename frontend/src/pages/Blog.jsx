import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Send,
  Pencil,
  Trash2,
  User,
  Calendar,
} from "lucide-react";
import Header from "../components/Header/Header";

function BlogPage() {
  // ---------- Data ----------
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Modern Web Development",
      author: "Admin",
      date: "20 June 2026",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=80",
      description:
        "Artificial Intelligence is transforming the way developers build modern web applications. AI is improving productivity and user experiences.",
    },
    {
      id: 2,
      title: "Why Every Business Needs a Website",
      author: "Admin",
      date: "18 June 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
      description:
        "Having a professional website increases credibility and helps businesses generate leads online.",
    },
    {
      id: 3,
      title: "React vs Next.js in 2026",
      author: "Admin",
      date: "15 June 2026",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600",
      description:
        "Choosing between React and Next.js depends on your project requirements and scalability needs.",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  // Like state
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);

  // Comment states
  const [comment, setComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [comments, setComments] = useState([
    { id: 1, name: "Rahul", text: "Amazing article!", own: false },
    { id: 2, name: "You", text: "Really loved this blog.", own: true },
  ]);

  // ---------- Handlers ----------
  const handleLike = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  const addComment = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), name: "You", text: comment, own: true },
    ]);
    setComment("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = () => {
    setComments(
      comments.map((item) =>
        item.id === editingId ? { ...item, text: editText } : item
      )
    );
    setEditingId(null);
  };

  const shareBlog = async () => {
    if (navigator.share) {
      await navigator.share({
        title: selectedBlog.title,
        text: selectedBlog.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Blog link copied to clipboard!");
    }
  };

  // ---------- Render ----------
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative bg-white text-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/pattern-bg.png')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Our <span className="text-blue-400">Blogs</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Explore our latest insights, stories, and thought leadership.
          </p>
        </div>
      </section>

      {/* ===== BLOG LIST ===== */}
      <section className="bg-[#F5F7FB] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedBlog(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0E0A42] line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                    <User size={14} />
                    {item.author}
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <Calendar size={14} />
                    {item.date}
                  </p>
                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED BLOG DETAIL ===== */}
      <section className="bg-[#F5F7FB] pb-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 lg:h-[500px]">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-4 text-white/80 mt-2">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {selectedBlog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {selectedBlog.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{selectedBlog.description}</p>
                <p>
                  Modern businesses increasingly rely on AI, automation,
                  cloud technologies, and scalable architectures to improve
                  efficiency and deliver exceptional digital experiences.
                </p>
                <p>
                  Stay ahead of the curve by embracing innovative technologies
                  and fostering a culture of continuous learning.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-gray-100">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    liked
                      ? "bg-red-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  <Heart fill={liked ? "white" : "none"} size={20} />
                  <span className="font-medium">{likes}</span>
                </button>

                <button
                  onClick={shareBlog}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-[#0E0A42] hover:text-white transition-all"
                >
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* ===== COMMENTS SECTION ===== */}
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="text-[#0E0A42]" size={28} />
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E0A42]">
                Comments ({comments.length})
              </h3>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-[#0E0A42]">
                          {item.name}
                        </span>
                        {item.own && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            You
                          </span>
                        )}
                      </div>

                      {editingId === item.id ? (
                        <div className="mt-2">
                          <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            rows={3}
                            className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="flex gap-3 mt-3">
                            <button
                              onClick={saveEdit}
                              className="bg-[#0E0A42] text-white px-5 py-2 rounded-lg hover:bg-[#1a1b55] transition"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="mt-1 text-gray-600">{item.text}</p>
                          {item.own && (
                            <div className="flex gap-4 mt-2">
                              <button
                                onClick={() => startEdit(item)}
                                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition"
                              >
                                <Pencil size={14} />
                                Edit
                              </button>
                              <button
                                onClick={() => deleteComment(item.id)}
                                className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition"
                              >
                                <Trash2 size={14} />
                                Delete
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Comment */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold text-[#0E0A42] mb-3">
                Leave a comment
              </h4>
              <textarea
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your thoughts..."
                className="w-full bg-gray-50 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <button
                onClick={addComment}
                className="mt-4 bg-[#0E0A42] text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#1a1b55] transition shadow-md hover:shadow-lg"
              >
                <Send size={18} />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;