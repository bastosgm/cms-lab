/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.scss";
import getPrismicClient, { Content } from "./lib/getPrismicClient";
import { useState } from "react";

// TODO: refatorar os css`s e ajeitar a responsividade dos elementos antes de commitar e ir fazer a proxima aula
export default function Home() {
  const [content, setContent] = useState<Content | null>();
  getPrismicClient().then((r) => setContent(r));
  console.log(content);

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
            <img
              width={100}
              height={400}
              src="/images/banner-exemplo.jpg"
              alt="banner"
            />
          </div>

          <hr className={styles.divisor} />

          <div className={styles.sectionContent}>
            <img
              width={200}
              height={400}
              src="/images/banner-exemplo.jpg"
              alt="second banner"
            />
            <section>
              <h2>Learn how to create Android and IOS applications</h2>
              <span>
                Illum cumque dicta, voluptas quibusdam expedita ab quia possimus
                doloribus tempora tenetur debitis corporis beatae laudantium
                fugiat corrupti, tempore dolore, unde ratione.
              </span>
            </section>
          </div>

          <hr className={styles.divisor} />

          <div className={styles.sectionContent}>
            <section>
              <h2>Get better as a web developer now!</h2>
              <span>
                Illum cumque dicta, voluptas quibusdam expedita ab quia possimus
                doloribus tempora tenetur debitis corporis beatae laudantium
                fugiat corrupti, tempore dolore, unde ratione.
              </span>
            </section>
            <img
              width={200}
              height={400}
              src="/images/banner-exemplo.jpg"
              alt="third banner"
            />
          </div>

          <div className={styles.nextLevelContent}>
            {/* <Image
          quality={100}
          width={400}
          height={100}
          src={banner}
          alt="banner"
        /> */}
            <h2>
              About more than <span>15k</span> already power up their carreers
            </h2>
            <span>
              Don&apos;t miss the chance to get the best out of your carreer
            </span>
            <a href="">
              <button>Let&apos;s get start it!</button>
            </a>
          </div>
        </>
      )}
    </main>
  );
}
