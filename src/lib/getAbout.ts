import * as RichText from "@prismicio/richtext";
import { createClient } from "@/config/prismicio";
import { PrismicError } from "@prismicio/client";

export interface aboutContent {
  title: string;
  description: any;
  banner: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

export default async function getAbout() {
  const client = createClient();

  try {
    // @ts-ignore
    const response: any = await client.getSingle("about").then((r) => r);

    const { title, description, banner, instagram, twitter, linkedin } =
      response.data;

    const content: aboutContent = {
      title: RichText.asText(title),
      description: RichText.asText(description),
      banner: banner.url,
      instagram: instagram.url,
      twitter: twitter.url,
      linkedin: linkedin.url,
    };

    return content;
  } catch (error) {
    console.error("An error has been occured: ", error);

    throw error;
  }
}
