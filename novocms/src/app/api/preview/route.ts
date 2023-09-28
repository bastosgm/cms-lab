import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "@/config/prismicio";

/**
 * This endpoint handles previews that are launched from the Page Builder.
 */
export async function GET(request: NextRequest) {
  const client = createClient();

  await redirectToPreviewURL({ client, request });
}
