import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Front-End Engineer @ noon.com</h1>
      <p className={styles.description}>
        <span className={styles.desc_index}>💡</span>
        <span className={styles.desc}>
          Hello! Thank you for your interest. This is the second part of the
          process where we would like to get a feel for what you&apos;re capable
          of, technically.
        </span>
      </p>
      <p className={styles.instructions}>
        Please follow the instructions given, and send it back with details on
        how to view it, how it was done, and any additional information. We are
        giving you a few days for this, depending on the day. But if you require
        more time for completion on the project - please let me know via email.
      </p>
      <p className={styles.instructions}>
        Your task, should you choose to accept it - is to create a{" "}
        <b>single page responsive app</b> using <b>NextJS</b>. You can use the
        image provided as a very simple guideline, and the rest is up to you. As
        for functionality - It should have two pages, a landing page, and a
        &quot;favorites&quot; page. Where the landing page is a list of things
        that a user can favorite ❤️, and a favorites page that will list these;
        which the user can remove from favorites. The back-end should be very
        simple; and built with NodeJS; which could be hosted elsewhere, or
        included in the same server instance as the NextJS app. (hint: second
        one is easier) It should just hold the favorited data.
      </p>
      <p className={styles.instructions}>
        The design/styling should be mobile-first, and on the desktop version
        the bottom menu should instead be on top; with the labels
        &quot;Home&quot; and &quot;Liked&quot;. Feel free to design the desktop
        version as you see fit. You should: - Use styled-components or sass for
        styling - Do a proper breakdown of components - Share the repository of
        where you pushed the code - Try to improve the UI in a way that it looks
        professionally polished, and exhibits your knowledge best You can
        (optional): - Use TypeScript (included in NextJS) for keeping things
        strict - Use ES6 syntax where applicable. Disregard the functionality of
        links (name, tags, comments) — but style them accordingly. Do not bother
        about user logins - this is a very sad one-user system. Remember -
        documentation is your friend. This is a test to measure your skills and
        knowledge.
      </p>
    </main>
  );
}
