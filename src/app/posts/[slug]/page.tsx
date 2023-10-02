"use client";

import { useEffect, useState } from "react";
import styles from "./post.module.scss";
import getPost from "@/lib/getPost";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IPostParams } from "./interfaces";

export default function Post({ params }: IPostParams) {
  const { slug } = params;
  const { push } = useRouter();
  const [post, setPost] = useState<any>();

  useEffect(() => {
    (async function fetchPosts() {
      const post = await getPost(slug as string);
      if (!post) push("/posts");
      setPost(post);
    })();
  }, []);

  return (
    <>
      <main className={styles.container}>
        <article className={styles.post}>
          {!post ? (
            <p>loading...</p>
          ) : (
            <>
              <Image
                src={post.cover}
                width={682}
                height={512}
                alt={post.title}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0rQcAAQ8AxteRdbQAAAAASUVORK5CYII="
              ></Image>
              <h1>{post.title}</h1>
              <time>{post.updatedAt}</time>
              <div className={styles.postContent}>{post.description}</div>
            </>
          )}
        </article>
      </main>
    </>
  );
}
