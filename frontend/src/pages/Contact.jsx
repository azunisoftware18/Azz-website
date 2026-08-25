import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { createContact } from "../services/contact.service";
import Header from "../components/Header/Header";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      await createContact(form);

      setSuccess("Your enquiry has been submitted successfully.");
      setForm(initialForm);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f6f7fb] pt-32 pb-16">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <MessageCircle size={16} />
                Let's start a conversation
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Let's build something
                <span className="block text-blue-600">amazing together.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                Have a project in mind or want to know more about our services?
                Send us a message and our team will get back to you as soon as
                possible.
              </p>
            </div>

            {/* Main Contact Section */}
            <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left Side */}
              <div className="relative overflow-hidden bg-gray-950 p-8 text-white sm:p-12">
                {/* Background decoration */}
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Get in touch
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-gray-400">
                    Whether you have a question, a project idea, or want to
                    explore how we can work together, we'd love to hear from
                    you.
                  </p>

                  {/* Contact Info */}
                  <div className="mt-12 space-y-7">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <Mail size={21} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-400">Email us</p>

                        <a
                          href="mailto:info@azzunique.com"
                          className="font-medium text-white transition hover:text-blue-400"
                        >
                          info@azzunique.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <Phone size={21} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-400">Call us</p>

                        <a
                          href="tel:+910000000000"
                          className="font-medium text-white transition hover:text-blue-400"
                        >
                          +91 00000 00000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <MapPin size={21} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-400">Location</p>

                        <p className="font-medium text-white">India</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="mt-16 border-t border-white/10 pt-8">
                    <p className="text-sm leading-6 text-gray-400">
                      Our team usually responds within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Fill in the details below and we'll get back to you soon.
                  </p>
                </div>

                {/* Success */}
                {success && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                    <CheckCircle2 size={21} className="mt-0.5 shrink-0" />

                    <p className="text-sm font-medium">{success}</p>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                    <AlertCircle size={21} className="mt-0.5 shrink-0" />

                    <p className="text-sm font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={19}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-400">
                    By submitting this form, you agree to be contacted regarding
                    your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
