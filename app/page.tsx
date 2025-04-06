import {promises as fs } from 'fs';

import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import { ContentItem, ExperienceItem, Recommendation } from '@/types/Types';
import ExperienceList from '@/components/experience-list/ExperienceList';
import Recommendations from '@/components/recommendations/Recommendations';
import Contact from '@/components/contact/Contact';
import { Box, Container } from '@mui/material';
import Footer from '@/components/footer/Footer';

export default async function Home() {

  const aboutContentResponse = await fs.readFile(process.cwd() + '/app/data/aboutContent.json', 'utf8');
  const aboutContentItems: ContentItem[] = JSON.parse(aboutContentResponse).data;

  const recommendationResponse = await fs.readFile(process.cwd() + '/app/data/recommendationContent.json', 'utf8');
  const recommendations: Recommendation[] = JSON.parse(recommendationResponse).data;

  const experienceContentResponse = await fs.readFile(process.cwd() + '/app/data/experienceContent.json', 'utf8');
  const experienceContentItems: ExperienceItem[] = JSON.parse(experienceContentResponse).data;

  return (
    <main className={styles.main}>
      <Banner />
        <Container>
          {aboutContentItems && <About contentItems={aboutContentItems} />}   
          {experienceContentItems && <ExperienceList experienceItems={experienceContentItems} />}
          {recommendations && <Recommendations recommendations={recommendations} />}
          <Contact />
        </Container>
    </main>
  );
}
