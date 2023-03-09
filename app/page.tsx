import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
              <b>Hello!</b> Thank you for your interest. This is the second
              stage of the interview process in which we want to get a sense of
              what you&apos;re technically capable of.
            </span>
          </p>
          <div className={styles.instructions}>
            <div className={styles.topic}>
              Your Task
              <Image src="/images/rocket.svg" alt="" width="30" height="30" />
            </div>
            <div className={styles.topic_desc}>
              <div className="item_nr">1.</div>
              <div className="desc_item">
                Create a single page <b>responsive</b> e-commerce app using{" "}
                <b>NextJS</b>. You can use the image provided as a very simple
                guideline, and the rest is up to you.
              </div>
              <div className="item_nr">2.</div>
              <div className="desc_item">
                In terms of functionality, A user should be able to add{" "}
                <b>one</b> or <b>more</b> items to his cart by clicking the{" "}
                <b>&quot;Add to Cart&quot;</b> button in the product box, and
                the number on the <b>cart icon</b> (
                <Image
                  src="/images/cart.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.cart_item}
                />
                ) should change accordingly.
              </div>
              <div className="item_nr">3.</div>
              <div className="desc_item">
                The backend should be simple and built with NodeJS, and it could
                be hosted elsewhere or included in the same app{" "}
                <b>(hint: NextJS API Routes)</b>. The backend should only store{" "}
                <b>wish-list</b>, <b>product</b> and <b>cart</b> data.
                Don&apos;t bother with user logins - this is a very sad one-user
                system. The <b>product data</b> Structure can be found{" "}
                <a
                  href="/api/products"
                  target="_blank"
                  className={styles.cart_item}
                >
                  here
                </a>
                .
              </div>
              <div className="item_nr">3.</div>
              <div className="desc_item">
                Include a <b>ReadMe</b> file that contains instructions on how
                to view it, how it was created, and any additional information.
                (Remember - documentation is your friend)
              </div>
              <div className="item_nr">4.</div>
              <div className="desc_item">
                We are giving you one week to complete this, but if you need
                more time, please let us know via email.
              </div>
              <div className="item_nr">5.</div>
              <div className="desc_item">
                Try to improve the UI so that it looks professional and best
                represents your knowledge.
              </div>
              <div className="item_nr">6.</div>
              <div className="desc_item">
                (Optional) Use TypeScript to keep things strict and ES6 syntax
                where appropriate.
              </div>
              <div className="item_nr">7.</div>
              <div className="desc_item">
                Do a proper breakdown of components. Remember - documentation is
                your friend.
              </div>
            </div>
          </div>
          <p className={styles.instructions}>
            The design/styling should be mobile-first, and on the desktop
            version the bottom menu should instead be on top; with the labels
            &quot;Home&quot; and &quot;Liked&quot;. Feel free to design the
            desktop version as you see fit. You should: - Use styled-components
            or sass for styling - Do a proper breakdown of components - Share
            the repository of where you pushed the code - Try to improve the UI
            in a way that it looks professionally polished, and exhibits your
            knowledge best You can (optional): - Use TypeScript (included in
            NextJS) for keeping things strict - Use ES6 syntax where applicable.
            Disregard the functionality of links (name, tags, comments) — but
            style them accordingly. Do not bother about user logins - this is a
            very sad one-user system. Remember - documentation is your friend.
            This is a test to measure your skills and knowledge.
          </p>
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
