import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <h1>Hello There Test</h1>
    </main>
  );
}
