import { PortableText } from "next-sanity";
import styles from "@/app/page.module.css";
import { client } from "../../sanity/client";
import { Container, Typography, Box, Divider, Grid } from "@mui/material";
import Contact from "@/components/contact/Contact";
import mapToBlogPost from "@/app/sanity/mappers";
import { BlogPost } from "@/types/Types";
import BlogCard from "@/components/blog-card/BlogCard";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const OTHER_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && slug.current != $slug]|order(publishedAt desc)[0...3]{
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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const [post, otherPosts] = await Promise.all([
    client.fetch(POST_QUERY, params, options),
    client.fetch(OTHER_POSTS_QUERY, params, options)
  ]);

  const blogPost = mapToBlogPost(post, projectId, dataset);
  const otherBlogPosts = otherPosts
    .map((post: any) => mapToBlogPost(post, projectId, dataset))
    .filter((post: BlogPost | undefined): post is BlogPost => post !== undefined);

  if (!blogPost) {
    return <div>Post not found</div>;
  }

  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 0, md: 4 }}
          sx={{ 
            margin: 0,
            justifyContent: 'center'
          }}
        >
          <Grid item xs={12} md={8}>
            <Box sx={{ py: 4 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {blogPost.title}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                {blogPost.author} ({new Date(blogPost.publishedAt).toLocaleDateString()})
              </Typography>

              {blogPost.imageUrl && (
                <Box 
                  component="img"
                  src={blogPost.imageUrl}
                  alt={blogPost.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    mb: 4
                  }}
                />
              )}

              <Box sx={{ 
                typography: 'body1',
                '& p': { mb: 2 },
                '& p:first-of-type::first-letter': {
                  fontSize: '3.5rem',
                  float: 'left',
                  lineHeight: 1,
                  pr: 1,
                  fontWeight: 'bold'
                }
              }}>
                <PortableText value={blogPost.content} />
              </Box>
            </Box>
          </Grid>

          <Grid 
            item 
            md={4} 
            sx={{ 
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Box sx={{ py: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>Other Posts</Typography>
              <Grid 
                container 
                spacing={2}
                sx={{ 
                  '& .MuiGrid-item': {
                    maxWidth: 330,
                    width: '100%'
                  }
                }}
              >
                {otherBlogPosts.map((post: BlogPost) => (
                  <Grid item xs={12} key={post.id}>
                    <BlogCard {...post} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />
        <Box sx={{ mb: 6 }}>
          <Contact />
        </Box>
      </Container>
    </main>
  );
}