import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import BlogIntro from "@/components/blog-intro/BlogIntro";

import { client } from "../sanity/client";
import Contact from "@/components/contact/Contact";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4 mb-12">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
      <BlogIntro 
        title="About the Blog"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis libero, interdum laoreet volutpat vel, vehicula et ligula. Mauris et lorem egestas, posuere odio eu, viverra quam. Integer sit amet sem erat. Cras sit amet arcu vel velit mattis gravida consequat eu lacus."
      />
      <Contact />
    </main>
  );
}