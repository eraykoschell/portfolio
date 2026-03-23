import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import ProjectBadge from "../_components/ProjectBadge";

import PebbleArtByKateLogo from "@/app/projects/dev/(list)/pebble-art-by-kate/assets/logos/final/logo.png";

export default function PageProjectsDev() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Dev. Projects</h1>
        <p>Learn about my experience and workflow</p>
      </header>
      <section className={styles.projectsByYear}>
        <h2>2024</h2>
        <section className={styles.projects}>
          <Link href="/projects/dev/pebble-art-by-kate" className={styles.project}>
            <Image src={PebbleArtByKateLogo} alt="Pebble Art By Kate logo"/>
            <div className={styles.content}>
              <p>Pebble Art By Kate</p>
              <ProjectBadge label="Client Project"/>
            </div>
          </Link>
        </section>
        <h2>2023</h2>
        <section className={styles.projects}>
          <Link href="/projects/dev/mtfm" className={styles.project}>
            <Image src="/assets/projects/mtfm/preview.png" width="1903" height="1065" alt=""/>
            <div className={styles.content}>
              <p>Mark This For Me</p>
              <ProjectBadge label="Personal Project"/>
            </div>
          </Link>
          <Link href="/projects/dev/dmiu" className={styles.project}>
            <Image src="/assets/projects/dmiu/preview.jpg" width="710" height="1065" alt=""/>
            <div className={styles.content}>
              <p>Electronic Visitor Sign-In/Out System</p>
              <ProjectBadge label="Client Project"/>
            </div>
          </Link>
        </section>
      </section>
    </main>
  )
}
