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
              <td>Expected Scenarios</td>
              <td>Marks</td>
            </tr>
            <tr>
              <td>Fulfillment of Expected Functionality</td>
              <td>50 (Max)</td>
            </tr>
            <tr>
              <td>UX/UI Implementation</td>
              <td>25 (Max)</td>
            </tr>
            <tr>
              <td>Using Best Coding Practices</td>
              <td>25 (Max)</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.total_explanation}>
          If you get <b>70+</b> marks, you will be considered for the next
          round.
        </div>
        <div className={styles.value_added}>
          <u>Optional points to demonstrate familiarity</u>
          <ul className={styles.value_added_li}>
            <li>Using NextJs 13+ Features</li>
            <li>Global State Management</li>
            <li>Using Custom Hooks</li>
            <li>Using TypeScript</li>
            <li>Using ES6+ Features</li>
            <li>Enhanced UX/UI or Animations</li>
            <li>Deploying to Vercel or Other cloud platforms</li>
            <li>End to End Testing</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
