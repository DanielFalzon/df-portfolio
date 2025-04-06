import { getDayDifferenceText } from "@/app/utils"
import { BlogPost } from "@/types/Types"
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import Link from "next/link"
import { FC } from "react"

// const BlogCard:FC<BlogPost | undefined> = (post) => {
//     return <li className="hover:underline" key={post?.id}>
//     <Link href={`/blog/${post?.slug}`}>
//       <h2 className="text-xl font-semibold">{post?.title}</h2>
//       <p>{ post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : new Date().toLocaleDateString()}</p>
//     </Link>
//   </li>
// }

const BlogCard:FC<BlogPost | undefined> = (post) => {
    const cardHeaderTitle = () : string => {
        if(!post){ return "An Article" }
        if(!post.author){ return `Published ${getDayDifferenceText(post?.publishedAt)}` }
        return `${post.author} - ${getDayDifferenceText(post?.publishedAt)}`
    }

    return (
    <Card>
        <Link href={`/blog/${post?.slug ?? ""}`} passHref>
            <CardActionArea>
                <CardHeader title={cardHeaderTitle()} />
                <CardMedia
                    component="img"
                    height="184"
                    image={post?.imageUrl}
                    alt="Paella dish"
                />  
            <CardContent>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                    {post?.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post?.excerpt}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Link>
    </Card>)
}

export default BlogCard