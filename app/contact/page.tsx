"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import NewsletterSection from "@/components/NewsletterSection";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    status: "idle",
    message: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ status: "loading", message: null });

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        status: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    try {
      // Save to Supabase
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) {
        setSubmitStatus({
          status: "error",
          message:
            error.message ||
            "Failed to submit the form. Please try again later.",
        });
        return;
      }

      setSubmitStatus({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ status: "idle", message: null });
      }, 5000);
    } catch {
      setSubmitStatus({
        status: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl font-bold text-dark md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-medium">
          Contact us to publish your latest web stories or share ideas to our
          website and get a good news.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Office Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-dark">Office</h3>
            <p className="mt-2 text-sm text-gray-medium">
              Victoria Street, London, UK
            </p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-dark">Email</h3>
            <p className="mt-2 text-sm text-gray-medium">hello@zarrin.com</p>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.92 7.02C15.24 5.18 12.04 4 8.5 4c-5.07 0-9.44 3.49-9.44 7.99 0 1.38.35 2.7.97 3.85L0 20.5l4.72-1.55c1.13.63 2.4 1.01 3.78 1.01 5.07 0 9.44-3.5 9.44-8 0-1.8-.63-3.49-1.82-4.94zM8.5 19c-1.38 0-2.74-.35-3.92-.99l-.28-.15-2.9.95.99-2.82-.18-.28c-.7-1.17-1.1-2.53-1.1-3.91 0-4.05 3.41-7.35 7.59-7.35 2.04 0 3.97.79 5.42 2.19 1.45 1.4 2.25 3.32 2.25 5.36 0 4.05-3.41 7.35-7.59 7.35z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-dark">Phone</h3>
            <p className="mt-2 text-sm text-gray-medium">+001 634-3843</p>
          </div>
        </div>
      </section>

      {/* Map Section with Form */}
      <section className="grid grid-cols-1">
        <div className="relative h-[550px] col-start-1 row-start-1">
          <Image
            src="/map.webp"
            alt="Map background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="col-start-1 row-start-1 self-end translate-y-1/2 z-10 px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+001 (555) 000-000"
                    className="mt-2 w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-dark"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="mt-2 w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-dark placeholder:text-gray-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`rounded-lg p-3 text-sm text-center ${
                    submitStatus.status === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus.status === "loading"}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitStatus.status === "loading"
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="h-[300px] md:h-[450px]"></div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
