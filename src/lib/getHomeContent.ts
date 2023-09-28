import * as RichText from "@prismicio/richtext";
import { createClient } from "@/config/prismicio";

export interface HomeContent {
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

export default async function getHomeContent() {
  const client = createClient();

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
    // @ts-ignore
  } = await client.getSingle("home").then((r) => r.data as any);

  const homeContent: HomeContent = {
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

  return homeContent;
}
