import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Send,
  Pencil,
  Trash2,
} from "lucide-react";
import Header from "../components/Header/Header";

function BlogPage() {
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

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);

  const [comment, setComment] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Rahul",
      text: "Amazing article!",
      own: false,
    },
    {
      id: 2,
      name: "You",
      text: "Really loved this blog.",
      own: true,
    },
  ]);

  const handleLike = () => {
    if (liked) setLikes(likes - 1);
    else setLikes(likes + 1);

    setLiked(!liked);
  };

  const addComment = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        name: "You",
        text: comment,
        own: true,
      },
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
        item.id === editingId
          ? {
              ...item,
              text: editText,
            }
          : item
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
      alert("Blog link copied.");
    }
  };

  return (
    <>
      <Header />

      <section className="bg-[#F5F7FB] py-20">

        {/* Hero */}

        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-6xl font-bold text-center text-[#0E0A42]">
            Our Blogs
          </h1>

          <p className="text-center text-gray-600 mt-5 mb-14">
            Explore our latest insights and articles.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {blogs.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedBlog(item)}
                className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >
                <img
                  src={item.image}
                  className="h-60 w-full object-cover"
                  alt=""
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0E0A42]">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Blog */}

          <div className="mt-24">

            <img
              src={selectedBlog.image}
              className="rounded-3xl w-full h-[500px] object-cover"
              alt=""
            />

            <div className="bg-white rounded-3xl p-10 shadow-lg mt-10">

              <h2 className="text-5xl font-bold text-[#0E0A42]">
                {selectedBlog.title}
              </h2>

              <div className="flex gap-5 text-gray-500 mt-4">
                <span>{selectedBlog.author}</span>
                <span>{selectedBlog.date}</span>
              </div>

              <p className="mt-10 text-lg leading-9 text-gray-600">
                {selectedBlog.description}
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Modern businesses increasingly rely on AI, automation,
                cloud technologies, and scalable architectures to improve
                efficiency and deliver exceptional digital experiences.
              </p>

              {/* Actions */}

              <div className="flex gap-5 mt-12">

                <button
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                    liked
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart fill={liked ? "white" : "none"} size={18} />
                  {likes}
                </button>

                <button
                  onClick={shareBlog}
                  className="px-6 py-3 rounded-full bg-gray-100 hover:bg-[#1B0A42] hover:text-white flex items-center gap-2"
                >
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>

            {/* Comments */}

            <div className="bg-white rounded-3xl p-10 mt-10 shadow-lg">

              <div className="flex items-center gap-3 mb-8">
                <MessageCircle />
                <h2 className="text-3xl font-bold">
                  Comments ({comments.length})
                </h2>
              </div>

              {comments.map((item) => (
                <div
                  key={item.id}
                  className="border-b py-5"
                >
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  {editingId === item.id ? (
                    <>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full mt-3 bg-gray-100 p-4 rounded-xl"
                      />

                      <button
                        onClick={saveEdit}
                        className="mt-3 bg-[#1B0A42] text-white px-5 py-2 rounded-lg"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="mt-2 text-gray-600">
                        {item.text}
                      </p>

                      {item.own && (
                        <div className="flex gap-5 mt-3">

                          <button
                            onClick={() => startEdit(item)}
                            className="flex items-center gap-2 text-blue-600"
                          >
                            <Pencil size={16} />
                            Edit
                          </button>

                          <button
                            onClick={() => deleteComment(item.id)}
                            className="flex items-center gap-2 text-red-600"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Add Comment */}

              <div className="mt-10">

                <textarea
                  rows={5}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full bg-[#EEF3FA] rounded-2xl p-5 outline-none"
                />

                <button
                  onClick={addComment}
                  className="mt-5 bg-black text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-900"
                >
                  <Send size={18} />
                  Post Comment
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;

