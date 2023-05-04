import styles from "../styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>ValueHunt</h1>
        </div>
        <p>Copyright © 2023 ValueHunt, Inc.</p>
      </div>

      <div className={styles.github}>
        <Link
          href="https://github.com/ValueHunt/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <Image
            className={styles.github_logo}
            priority
            src="/img/github.png"
            alt="Github"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
