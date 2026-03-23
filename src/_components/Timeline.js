import Image from "next/image";

import ExternalLink from "./ExternalLink";
import { timeline } from "@/_data/timeline.js";

import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section className={styles.container}>
      <h2>Highlights</h2>
      <section className={styles.years}>
        {timeline.data.map(period => (
          <section key={period.year} className={styles.year}>
            <h3>{period.year}</h3>
            <section className={styles.events}>
              {period.events.map(event => (
                <article key={event.month} className={styles.event}>
                  <div>
                    <p className={styles.month}>{event.month}</p>
                    <p className={styles.type}>{event.type}</p>
                  </div>
                  {event.thumbnail && (
                    <Image
                      src={event.thumbnail.url}
                      alt={event.thumbnail.alt}
                      width={event.thumbnail.width}
                      height={event.thumbnail.height}
                    />
                  )}
                  <p>{event.desc}</p>
                  <div className={styles.links}>
                    {event.links.map(link => (
                      <ExternalLink
                        key={link.label}
                        url={link.url}
                        label={link.label}/>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </section>
        ))}
      </section>
      <p>Guess we&apos;ve hit rock bottom 👀</p>
    </section>
  );
}