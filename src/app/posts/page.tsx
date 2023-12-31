import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import getPosts from "../../lib/getPosts";

export default async function Posts() {
  const posts = await getPosts();
  // TODO: incrementar paginação pegando do projeto Iara
  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts?.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <Image
                src={post.cover}
                alt={post.title}
                width={400}
                height={200}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0rQcAAQ8AxteRdbQAAAAASUVORK5CYII="
              />
              <strong>{post.title}</strong>
              <time>{post.updatedAt.toUpperCase()}</time>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
