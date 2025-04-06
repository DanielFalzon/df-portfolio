import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import styles from "../page.module.css";

import { client } from "../sanity/client";
import { Divider, Grid, Typography } from "@mui/material";
import BlogCard from "@/components/blog-card/BlogCard";
import mapToBlogPost from "../sanity/mappers";
import { BlogPost } from "@/types/Types";

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
      <Typography variant="h1"> My Blog</Typography>
      <Grid container spacing={4} justifyContent={"center"} sx={{ maxWidth: 370}}>
        {blogPosts.map((post) => (
          <Grid item xs={12}>
            <BlogCard {...post} key={post.id} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Divider sx={{ width: '100%', marginTop: '2rem'}} />
        </Grid>
      
        <Grid item xs={12}>
          <Typography variant="h2"> About</Typography>
        </Grid>
      </Grid>
    </main>
  );
}