import { NextResponse , NextRequest} from "next/server";
import { supabase } from "@/utils/supabase";

const VIEWS_SECRET_KEY = process.env.VIEWS_SECRET_KEY;

export async function GET() {
  const { data, error } = await supabase
    .from("page_views")
    .select("views");

  if (error) {
    console.error("Error al consultar las visitas", error);
  }
  return NextResponse.json({ views: data || 0 });
}

export async function POST(request: NextRequest) {
  const secretKey = request.headers.get("X-Views-Secret-Key");

  if (secretKey !== VIEWS_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const { error } = await supabase.rpc("increment_views");
    if (error) {
      throw error;
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
