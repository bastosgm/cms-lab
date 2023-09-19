import Prismic from "@prismicio/client";
import * as RichText from "@prismicio/richtext";
import { createClient } from "@/prismicio";

export interface Content {
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

export default async function getPrismicClient() {
  const client = createClient();

  // TODO: resolver o erro de type "not page" que não faz muito sentido aparentemente
  const {
    title,
    subtitle,
    link_action,
    first_section_title,
    first_section_description,
    first_section_image,
    second_section_title,
    second_section_description,
    second_section_image,
  } = await client.getSingle("home").then((r) => r.data as any);

  const content: Content = {
    title: RichText.asText(title),
    subtitle: RichText.asText(subtitle),
    linkAction: link_action.url,
    firstSectionTitle: RichText.asText(first_section_title),
    firstSectionDescription: RichText.asText(first_section_description),
    firstSectionImage: first_section_image.url,
    secondSectionTitle: RichText.asText(second_section_title),
    secondSectionDescription: RichText.asText(second_section_description),
    secondSectionImage: second_section_image.url,
  };

  console.log(content);

  return content;
}
