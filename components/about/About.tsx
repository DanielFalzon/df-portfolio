import { ContentItem } from "@/types/Types";
import { Container, Typography } from "@mui/material";
import { FC } from "react";
import ContentLoader from "../content-loader/ContentLoader";

type AboutProps = {
    contentItems: ContentItem[]
}

const About: FC<AboutProps> = ({contentItems}) => {
    return (
        <Container>
            <Typography variant='h2' id='about'>About Me</Typography>
            <ContentLoader contentItems={contentItems} />
        </Container>
    )
}

export default About;