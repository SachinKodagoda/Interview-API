import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <main className={styles.container}>
      <Image
        src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
        alt="noon logo"
        width={87}
        height={24}
      />
    </main>
  );
}
