import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("page_views")
    .select("views");

  if (error) {
    console.error("Error al consultar las visitas", error);
  }
  return NextResponse.json({ views: data || 0 });
}

export async function POST() {
  try {
    const { error } = await supabase.rpc("increment_views");
    if (error) {
      console.log(error);
      throw error;
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
