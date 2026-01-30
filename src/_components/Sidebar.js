"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import CursorArrowRaysIcon from "@heroicons/react/24/outline/CursorArrowRaysIcon";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";

import styles from "./Sidebar.module.css";

function isActive(href, currentPath) {
  if (href === "/") {
    if (currentPath === href) {
      return styles.active;
    }
  } else {
    if (currentPath.startsWith(href)) {
      return styles.active;
    }
  }


  return "";
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <section className={styles.opener}>
        <button>
          <Bars3Icon width="2rem"/>
        </button>
        <section className={styles.shrink}>
          <Link href="/" className={isActive("/", pathname)}>
            <HomeIcon width="1.5rem"/>
          </Link>
          <Link href="/projects/dev" className={isActive("/projects/dev", pathname)}>
            <CodeBracketIcon width="1.5rem"/>
          </Link>
          <Link href="/writing" className={isActive("/writing", pathname)}>
            <PencilIcon width="1.5rem"/>
          </Link>
          <Link href="/designs">
            <CursorArrowRaysIcon width="1.5rem"/>
          </Link>
        </section>
      </section>
      <section className={styles.nav}>
        <section>
          <p className={styles.tag}>NAVIGATION</p>
          <Link href="/" className={isActive("/", pathname)}>
            <HomeIcon width="1rem"/>
            <p>Home</p>
          </Link>
        </section>
        <section>
          <p className={styles.tag}>MY WORK</p>
          <Link href="/projects/dev" className={isActive("/projects/dev", pathname)}>
            <CodeBracketIcon width="1rem"/>
            <p>Development</p>
          </Link>
          <Link href="/writing" className={isActive("/writing", pathname)}>
            <PencilIcon width="1rem"/>
            <p>Writing</p>
          </Link>
          <Link href="/designs" className={isActive("/designs", pathname)}>
            <CursorArrowRaysIcon width="1rem"/>
            <p>Designs/Graphics</p>
          </Link>
        </section>
        <section>
          <p className={styles.tag}>PROFILES</p>
          <Link href="https://www.linkedin.com/in/eraykoschell/" target="_blank" rel="noreferrer">
            <ArrowTopRightOnSquareIcon width="1rem"/>
            <p>LinkedIn</p>
          </Link>
          <Link href="https://github.com/eraykoschell" target="_blank" rel="noreferrer">
            <ArrowTopRightOnSquareIcon width="1rem"/>
            <p>GitHub</p>
          </Link>
        </section>
        <div className={styles.fill}/>
        <section>
          <p className={styles.tag}>GET IN TOUCH</p>
          <Link href="mailto:ek.contact@atomicmail.io">
            <EnvelopeIcon width="1rem"/>
            <p>Send an email</p>
          </Link>
        </section>
      </section>
    </nav>
  );
}