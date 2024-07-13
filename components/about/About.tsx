import { ContentItem } from "@/types/Types";
import { Container } from "@mui/material";
import { FC } from "react";
import ContentLoader from "../content-loader/ContentLoader";

type AboutProps = {
    contentItems: ContentItem[]
}

const About: FC<AboutProps> = ({contentItems}) => {
    return (
        <Container>
            <ContentLoader contentItems={contentItems} />
        </Container>
    )
}

export default About;