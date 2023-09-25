import * as RichText from "@prismicio/richtext";
import { createClient } from "@/prismicio";

export interface PostContent {
  title: string;
  subtitle: string;
  linkAction: string;
  firstSectionTitle: string;
  firstSectionDescription: string;
  firstSectionImage: string;
  secondSectionTitle: string;
  secondSectionDescription: string;
  secondSectionImage: string;
}

export default async function getPosts() {
  const client = createClient();

  const response = await client
    .getAllByType("post", {
      orderings: {
        field: "document.last_publication_date desc",
        fetch: ["post.title", "post.description", "post.cover"],
      },
      page: 1,
      pageSize: 3,
    })
    .then((r) => r);

  const posts = response.map((post: any) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find(
          (content: any) => content.type === "paragraph",
        )?.text ?? "",
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        },
      ),
    };
  });

  return posts;
}
