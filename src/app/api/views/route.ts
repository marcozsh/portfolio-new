import { NextResponse , NextRequest} from "next/server";
import { supabase } from "@/utils/supabase";
import { createServerLogger } from "@/lib/logger";

const VIEWS_SECRET_KEY = process.env.VIEWS_SECRET_KEY;
const logger = createServerLogger("views.ts");

export async function GET() {
  logger.info("Received request to get view count");
  const { data, error } = await supabase
    .from("page_views")
    .select("views");

  if (error) {
      logger.error("Error fetching view count", { error: error.message });
  }
  return NextResponse.json({ views: data || 0 });
}

export async function POST(request: NextRequest) {
  const secretKey = request.headers.get("X-Views-Secret-Key");

  logger.info("Received request to increment views", { secretKeyProvided: !!secretKey });

  if (secretKey !== VIEWS_SECRET_KEY) {
    logger.warn("Unauthorized attempt to increment views", { secretKeyProvided: !!secretKey });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    logger.info("Incrementing view count in database");
    const { error } = await supabase.rpc("increment_views");
    if (error) {
      logger.error("Error incrementing view count", { error: error.message });
      throw error;
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Error incrementing view count", { error: error instanceof Error ? error.message : String(error) });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
