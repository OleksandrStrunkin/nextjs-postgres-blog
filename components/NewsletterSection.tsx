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
      className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20"
    >
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 shadow-sm backdrop-blur-md">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Subscribe to our monthly newsletter to receive the latest posts,
              design tips, and Supabase updates straight to your inbox.
            </p>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Built by a former Sales Department Head (managing 40+ people) now
              building React apps—passionate about AI, clean code, and complex
              systems.
            </p>
            {message && (
              <p
                className={`mt-4 max-w-md text-sm ${
                  status === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {message}
              </p>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
