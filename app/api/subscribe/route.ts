import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl ?? "", supabaseServiceKey ?? "");

export async function POST(request: Request) {
  const body = await request.json();
  const email = (body?.email ?? "").toString().trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const { error } = await supabase.from("subscribers").insert({ email });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to save email." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
