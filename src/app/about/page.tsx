import getAbout from "@/lib/getAbout";
import styles from "./page.module.scss";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default async function About() {
  const content = await getAbout();

  return (
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>

          <a href={content.instagram}>
            <FaInstagram size={30} />
          </a>
          <a href={content.twitter}>
            <FaTwitter size={30} />
          </a>
          <a href={content.linkedin}>
            <FaLinkedin size={30} />
          </a>
        </section>
        <Image width={500} height={300} src={content.banner} alt="banner" />
      </div>
    </main>
  );
}
