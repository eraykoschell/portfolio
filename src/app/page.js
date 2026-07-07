import Image from "next/image";
import ChatBubbleBottomCenterIcon from "@heroicons/react/24/outline/ChatBubbleBottomCenterIcon";

import Timeline from "../_components/Timeline";
import DisplayNameImage from "@/assets/display_name_white.webp";
import PfpImage from "@/assets/pfp.webp";
import ManchesterSkylineImage from "@/assets/manchester_skyline.webp";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <section className={styles.quickInfo}>
          <Image
            src={DisplayNameImage}
            className={styles.displayName}
            alt="Eray Koschell"
            role="heading"
            priority
          />
          <p className={styles.jobTitle}>Software Engineer</p>
          <p className={styles.degree}>BSc (Hons) Web Design & Development</p>
        </section>
        <section className={styles.pfpBanner}>
          <Image
            src={ManchesterSkylineImage}
            className={styles.bannerImage}
            alt="Manchester skyline"
            priority
          />
          <div className={styles.pfp}>
            <Image
              src={PfpImage}
              alt="A picture of me pointing at the sea."
              priority
            />
          </div>
        </section>
      </header>
      <section className={styles.intro}>
        <p className={styles.desc}>
          Hi, I&apos;m <span className={styles.pronounce} title="Pronounced Air-i">Eray</span>, a &lt;<span className={styles.highlight1}>Software Engineer</span>&gt; based
          in Manchester. I work independently and collaboratively,
          building high-quality products and working with the great teams behind them.
        </p>
        <section className={styles.quote}>
          <ChatBubbleBottomCenterIcon width="2rem"/>
          <p>I believe great products come from teams who care about the craft, the people they build with, and the impact they create. The right culture brings out our best work.</p>
        </section>
      </section>
      <Timeline/>
      <section className={styles.shallWe}>
        <h2>Shall we?</h2>
        <p>Use the sidebar to get in touch with me.</p>
        <h6>Location preference</h6>
        <p>I find I work best in a hybrid office setting with a few days in the office and a few days working from home.</p>
        <p>However, I&apos;m open to fully remote work depending on the role, team, and mission.</p>
      </section>
    </main>
  )
}
