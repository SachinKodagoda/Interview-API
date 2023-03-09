import Image from "next/image";
import styles from "./marking.module.css";

export default function Marking() {
  return (
    <main className={styles.container}>
      <div className={styles.marking}>
        How are you evaluated?{" "}
        <Image src="/images/meter.svg" alt="" width="30" height="30" />
      </div>
      <div className={styles.mark_table_ctr}>
        <table className={styles.mark_table}>
          <tbody>
            <tr>
              <td>Scenario</td>
              <td>xddd</td>
            </tr>
            <tr>
              <td>Scenario</td>
              <td>xddd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
