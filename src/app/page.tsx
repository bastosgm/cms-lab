"use client";
import styles from "./page.module.scss";
import getHomeContent, { HomeContent } from "../lib/getHomeContent";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [content, setContent] = useState<HomeContent | null>();

  useEffect(() => {
    getHomeContent().then((r) => setContent(r));
  }, []);

  return (
    <main className={styles.container}>
      {!content ? (
        <p>loading...</p>
      ) : (
        <>
          <div className={styles.containerHeader}>
            <section className={styles.ctaText}>
              <h1>{content.title}</h1>
              <span>{content.subtitle}</span>

              <a href={content.linkAction}>
                <button>Let&apos;s get start it!</button>
              </a>
            </section>
            <Image
              width={100}
              height={400}
              src="/images/banner-exemplo.jpg"
              alt="banner"
            />
          </div>

          <hr className={styles.divisor} />

          <div className={styles.sectionContent}>
            <Image
              width={200}
              height={400}
              src={content.secondSectionImage}
              alt="second banner"
            />
            <section>
              <h2>{content.secondSectionTitle}</h2>
              <span>{content.secondSectionDescription}</span>
            </section>
          </div>

          <hr className={styles.divisor} />

          <div className={styles.sectionContent}>
            <section>
              <h2>{content.secondSectionTitle}</h2>
              <span>{content.secondSectionDescription}</span>
            </section>
            <Image
              width={200}
              height={400}
              src={content.secondSectionImage}
              alt="third banner"
            />
          </div>

          <div className={styles.nextLevelContent}>
            <h2>
              About more than <span>15k</span> already power up their carreers
            </h2>
            <span>
              Don&apos;t miss the chance to get the best out of your carreer
            </span>
            <a href={content.linkAction}>
              <button>Let&apos;s get start it!</button>
            </a>
          </div>
        </>
      )}
    </main>
  );
}
