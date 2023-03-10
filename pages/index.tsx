import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const PushNotificationLayout = dynamic(
  () => import("../components/PushNotificationLayout"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <PushNotificationLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Home Page</h2>
        </main>
      </div>
    </PushNotificationLayout>
  );
}
