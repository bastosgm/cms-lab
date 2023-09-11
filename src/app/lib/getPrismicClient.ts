import Prismic from "@prismicio/client";
import { createClient } from "@/prismicio";

export default async function getPrismicClient() {
  const client = createClient();

  // TODO: resolver o erro de type "not page" que não faz muito sentido aparentemente
  const page = await client.getSingle("home");

  console.log(page);
  return page;
}
