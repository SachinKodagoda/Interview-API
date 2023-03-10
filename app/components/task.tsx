import Image from "next/image";
import Link from "next/link";
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
          You have to create a <b>responsive e-commerce</b> app using{" "}
          <b>NextJs</b>. It should include a <b>Home page</b> and{" "}
          <b>Add to Cart Modal</b>. Click here (
          <button
            type="button"
            className={styles.change_view}
            onClick={() => {
              setImageName((a) => (a === "home" ? "cart" : "home"));
            }}
          >
            {imageName === "home" ? "Home" : "Cart"}
          </button>
          ) to switch between the home page and the Add-To-Cart Modal{" "}
        </div>
        <div className={styles.item_nr}>2.</div>
        <div className={styles.desc_item}>
          In terms of functionality, A user should be able to add <b>one</b> or{" "}
          <b>more</b> items into his cart by clicking the{" "}
          <b>&quot;Add to Cart&quot;</b> button (
          <Image
            src="/images/add_to_cart.png"
            alt=""
            width="120"
            height="30"
            className={styles.cart_item}
          />
          ) on the product box, and the number on the <b>cart icon</b> (
          <Image
            src="/images/cart_icon.png"
            alt=""
            width="30"
            height="30"
            className={styles.cart_item}
          />
          ) should change accordingly.
        </div>
        <div className={styles.item_nr}>3.</div>
        <div className={styles.desc_item}>
          The backend should be simple and built with <b>NodeJS</b>, and it
          could be hosted elsewhere or included in the same app{" "}
          <b>(hint: NextJS API Routes)</b>. The backend should only store{" "}
          <b>cart</b> data. Don&apos;t be concerned about user logins because
          this is a very simple <b>one-user</b> system. The <b>product data</b>{" "}
          Structure can be found{" "}
          <Link
            href="/api/products"
            className={styles.cart_item}
            target="_blank"
          >
            here
          </Link>
          .
        </div>
        <div className={styles.item_nr}>4.</div>
        <div className={styles.desc_item}>
          Include a <b>ReadMe</b> file with instructions on how to view your
          project, how it was made, and any other information.{" "}
          <b>(Keep in mind that documentation is your friend)</b>
        </div>
        <div className={styles.item_nr}>5.</div>
        <div className={styles.desc_item}>
          Do a proper breakdown of components and improve the user interface so
          that it looks professional and best represents your knowledge.
        </div>
        <div className={styles.item_nr}>6.</div>
        <div className={styles.desc_item}>
          Ignore the functionality of links (name, tags, wishlist) but style
          them appropriately.
        </div>
        <div className={styles.item_nr}>7.</div>
        <div className={styles.desc_item}>
          We are giving you <b>one week</b> to complete this, but if you need
          more time, please let us know via email.
        </div>
        <div className={styles.item_nr}>8.</div>
        <div className={styles.desc_item}>
          <b>Image Resources</b> can be found{" "}
          <Link href="/" className={styles.cart_item}>
            here
          </Link>
          . <b>Figma</b> file can be found{" "}
          <Link
            href="https://www.figma.com/file/bnKiEnYxcvjdFZ7h4d7KKk/noon-interview?node-id=0%3A1&t=1zOtuHqZxX6cPfSp-1"
            className={styles.cart_item}
            target="_blank"
          >
            here
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
