"use client";
import Image from "next/image";
import { useState } from "react";
import Marking from "./components/marking";
import Task from "./components/task";
import styles from "./page.module.css";

export default function Home() {
  const [imageName, setImageName] = useState<"home" | "cart">("home");
  return (
    <main className={styles.main}>
      <section className={styles.section_body}>
        <section className={styles.description_section}>
          <p className={styles.description}>
            <Image
              src="/images/bulb.svg"
              alt=""
              width="30"
              height="30"
              className={styles.desc_index}
            />
            <span className={styles.desc}>
              <b>Hello!</b> Thank you for your interest. This is the{" "}
              <b>second stage</b> of the interview process in which we want to
              get a sense of what you&apos;re technically capable of.
            </span>
          </p>
          <Task imageName={imageName} setImageName={setImageName} />
          <Marking />
        </section>
        <picture className={styles.picture_tag}>
          <img
            src="/images/home.png"
            alt="home page"
            className={styles.home_page_img}
          />
        </picture>
      </section>
    </main>
  );
}
