"use client";

import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.container}>
      <p>
        This site is open-source, view the source-code
        in my GitHub <a href="https://github.com/eraykoschell/portfolio" target="_blank" rel="noopener noreferrer">repository</a>.
      </p>
      <p>Copyright &copy; {currentYear} Eray Koschell. All rights reserved.</p>
    </section>
  );
}
