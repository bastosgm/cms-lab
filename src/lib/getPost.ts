import * as RichText from "@prismicio/richtext";
import { createClient } from "@/config/prismicio";
import { PrismicError } from "@prismicio/client";

export interface uniquePost {
  id: string;
  title: string;
  description: any;
  cover: string;
  updatedAt: string;
}

export default async function getPost(id: string) {
  const client = createClient();

  try {
    const response: any =
      // @ts-ignore
      (await client.getByUID("post", String(id)).then((r) => r)) ?? null;

    const post: uniquePost = {
      id: response.uid,
      title: RichText.asText(response.data.title),
      description: RichText.asText(response.data.description),
      cover: response.data.cover.url,
      updatedAt: new Date(response.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        },
      ),
    };

    return post;
  } catch (error) {
    if (
      !(error instanceof PrismicError) ||
      error.message !== `No documents were returned`
    ) {
      console.error("An error has been occured: ", error);
      throw error;
    }
    return null;
  }
}
