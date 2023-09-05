import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

export default function posts() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <Image
              width={400}
              height={200}
              src="/images/banner-exemplo.jpg"
              alt="Post 1"
            />
            <strong>Criando meu primeiro aplicativo</strong>
            <time>14 JUNHO 2021</time>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              molestias veniam, quis odio nesciunt nemo. Rerum voluptatibus
              delectus ipsam sequi aliquam aperiam minima, fuga, sint facilis
              dolor cupiditate distinctio iste?
            </p>
          </Link>

          <div className={styles.buttonsNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={24} color="#ffffff" />
              </button>
              <button>
                <FiChevronLeft size={24} color="#ffffff" />
              </button>
            </div>
            <div>
              <button>
                <FiChevronsRight size={24} color="#ffffff" />
              </button>
              <button>
                <FiChevronRight size={24} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
