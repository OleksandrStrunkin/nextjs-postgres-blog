"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage(null);

    const { error } = await supabase.from("subscribers").insert({ email });

    if (error) {
      setStatus("error");
      setMessage(
        error.code === "23505"
          ? "This email is already subscribed."
          : "Something went wrong. If this continues, please try again later.",
      );
      return;
    }

    setStatus("success");
    setMessage("You’re subscribed! Check your inbox soon.");
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="relative bg-primary px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(255,255,255,0.05);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgba(255,255,255,0);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='2'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    >
      <div className="absolute -top-20 -left-20 w-40 h-40 pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,100 Q 50,50 100,100 T 200,100"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M 0,120 Q 50,70 100,120 T 200,120"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 200,100 Q 150,50 100,100 T 0,100"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M 200,120 Q 150,70 100,120 T 0,120"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl leading-tight">
            Get our stories delivered From
            <span className="block">us to your inbox weekly.</span>
          </h2>
        </div>

        <div className="w-full border border-white rounded-lg p-1 sm:max-w-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              className="flex-1 bg-white px-5 py-3 text-sm text-dark placeholder:text-gray-light focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Get started"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-white/70 max-w-md">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a response the following day.
        </p>

        {message && (
          <p
            className={`text-center text-sm ${
              status === "success" ? "text-emerald-200" : "text-rose-300"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
