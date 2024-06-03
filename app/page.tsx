import {promises as fs } from 'fs';

import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import { ContentItem } from '@/types/Types';

export default async function Home() {

  const response = await fs.readFile(process.cwd() + '/app/data/aboutContent.json', 'utf8');
  const contentItems: ContentItem[] = JSON.parse(response).data;

  return (
    <main className={styles.main}>
      <Banner />
      <About contentItems={contentItems} />   
    </main>
  );
}
