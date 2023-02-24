import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const PushNotificationLayout = dynamic(
  () => import("../components/PushNotificationLayout"),
  {
    ssr: false,
  }
);

export default function Offers() {
  return (
    <PushNotificationLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Offers Page</h2>
          <p>50% discount on T shirts</p>
        </main>
      </div>
    </PushNotificationLayout>
  );
}
