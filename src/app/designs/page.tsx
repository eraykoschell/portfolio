import Link from "next/link";
import Image from "next/image";

import TheMaltHousePreview from "@/app/designs/designs/the-malthouse-business-centre/assets/the-malthouse-business-centre-home-before-desktop.png";

import styles from "./page.module.css";

export default function PageDesigns() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Designs</h1>
        <p>Designs and concepts for various projects.</p>
      </header>
      <section className={styles.writing}>
        <Link href="/designs/designs/the-malthouse-business-centre" className={styles.article}>
          <Image src={TheMaltHousePreview} alt="Original desktop home page before redesign" />
          <div className={styles.content}>
            <p>The Malthouse Business Centre</p>
            <p>2024</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
