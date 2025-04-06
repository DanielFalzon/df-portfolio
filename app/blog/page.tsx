import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import styles from "../page.module.css";

import { client } from "../sanity/client";
import { Container, Divider, Grid, Typography } from "@mui/material";
import BlogCard from "@/components/blog-card/BlogCard";
import mapToBlogPost from "../sanity/mappers";
import { BlogPost } from "@/types/Types";
import BlogIntro from "@/components/blog-intro/BlogIntro";
import Contact from "@/components/contact/Contact";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  image,
  body,
  slug,
  author,
  publishedAt,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..155], "") + "..."
}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  const blogPosts: BlogPost[] = posts
    .map((post) => mapToBlogPost(post, projectId, dataset))
    .filter((post) => post !== undefined) as BlogPost[];
    
  return (
    <main className={styles.main}>
      <Container maxWidth={false} sx={{ width: '100vw' }}>
        <Typography variant="h1" sx={{ mb: 4 }}>My Blog</Typography>
        <Grid 
          container 
          rowSpacing={4}
          columnSpacing={{ xs: 0, sm: 4, md: 4 }}
          justifyContent="center"
          sx={{ 
            width: '100%',
            margin: 0,
            padding: 0,
            '& .MuiGrid-item': {
              maxWidth: 370,
              width: '100%'
            }
          }}
        >
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogCard {...post} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ width: '100%', my: 4 }} />

        <Grid container sx={{ padding: 0 }}>
          <Grid item xs={12}>
            <BlogIntro
              title="About the Blog"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis libero, interdum laoreet volutpat vel, vehicula et ligula. Mauris et lorem egestas, posuere odio eu, viverra quam. Integer sit amet sem erat. Cras sit amet arcu vel velit mattis gravida consequat eu lacus."
            />
          </Grid>

          <Divider sx={{ width: '100%', my: 4 }} />

          <Grid item xs={12}>
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}