"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import NewsletterSection from "@/components/NewsletterSection";
import Icon from "@/components/Icon";

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
        <h1 className="text-[clamp(1.5rem,4vw+1rem,3rem)] font-bold text-dark">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-77.5 mx-auto text-[12px] text-gray-light">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Office Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <Icon name="icon-office" className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-dark">Office</h3>
            <p className="mt-2 text-sm text-gray-medium">
              Victoria Street, London, UK
            </p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <Icon name="icon-email" className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-dark">Email</h3>
            <p className="mt-2 text-sm text-gray-medium">hello@zarrin.com</p>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E0E0E0] hover:border-primary transition">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <Icon name="icon-phone" className="w-5 h-5" />
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
          <div className="max-w-134 mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
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
