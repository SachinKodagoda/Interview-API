import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styles from "./task.module.css";

type TProps = {
  imageName: "home" | "cart";
  setImageName: Dispatch<SetStateAction<"home" | "cart">>;
};
export default function Task({ imageName, setImageName }: TProps) {
  return (
    <div className={styles.instructions}>
      <div className={styles.topic}>
        Your Task
        <Image src="/images/rocket.svg" alt="" width="30" height="30" />
      </div>
      <div className={styles.topic_desc}>
        <div className={styles.item_nr}>1.</div>
        <div className={styles.desc_item}>
          Create a single page <b>responsive</b> e-commerce app using{" "}
          <b>NextJS</b>. You can use the image provided as a very simple
          guideline, and the rest is up to you. Click here to switch Image into{" "}
          <button
            type="button"
            className={styles.change_view}
            onClick={() => {
              setImageName((a) => (a === "home" ? "cart" : "home"));
            }}
          >
            {imageName === "home" ? "Cart Modal" : "Home Page"}
          </button>
        </div>
        <div className={styles.item_nr}>2.</div>
        <div className={styles.desc_item}>
          In terms of functionality, A user should be able to add <b>one</b> or{" "}
          <b>more</b> items to his cart by clicking the{" "}
          <b>&quot;Add to Cart&quot;</b> button on the product box, and the
          number on the <b>cart icon</b> (
          <Image
            src="/images/cart.png"
            alt=""
            width="30"
            height="30"
            className={styles.cart_item}
          />
          ) should change accordingly.
        </div>
        <div className={styles.item_nr}>3.</div>
        <div className={styles.desc_item}>
          The backend should be simple and built with NodeJS, and it could be
          hosted elsewhere or included in the same app{" "}
          <b>(hint: NextJS API Routes)</b>. The backend should only store{" "}
          <b>wish-list</b>, <b>product</b> and <b>cart</b> data. Don&apos;t
          bother with user logins - this is a very sad one-user system. The{" "}
          <b>product data</b> Structure can be found{" "}
          <a href="/api/products" target="_blank" className={styles.cart_item}>
            here
          </a>
          .
        </div>
        <div className={styles.item_nr}>4.</div>
        <div className={styles.desc_item}>
          Include a <b>ReadMe</b> file that contains instructions on how to view
          it, how it was created, and any additional information.{" "}
          <b>(Remember - documentation is your friend)</b>
        </div>
        <div className={styles.item_nr}>6.</div>
        <div className={styles.desc_item}>
          Improve the user interface so that it looks professional and best
          represents your knowledge. Do a proper breakdown of components.
        </div>
        <div className={styles.item_nr}>6.</div>
        <div className={styles.desc_item}>
          (Optional) Use <b>TypeScript</b> to keep things strict and <b>ES6</b>{" "}
          syntax where appropriate.
        </div>
        <div className={styles.item_nr}>6.</div>
        <div className={styles.desc_item}>
          Ignore the functionality of links (name, tags, wishlist) but style
          them appropriately.
        </div>
        <div className={styles.item_nr}>5.</div>
        <div className={styles.desc_item}>
          We are giving you <b>one week</b> to complete this, but if you need
          more time, please let us know via email.
        </div>
      </div>
    </div>
  );
}
