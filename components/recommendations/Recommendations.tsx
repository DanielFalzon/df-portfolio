import { Recommendation } from "@/types/Types"
import { Container, Link, Typography } from "@mui/material"
import { FC } from "react";
import RecommendationSlider from "../recommendation-slider/RecommendationSlider";

type RecommendationsProps = {
    recommendations: Recommendation[];
}

const Recommendations: FC<RecommendationsProps> = ({recommendations}) => {
    return(
        <Container
        >
            <Typography
                variant="h2"
            >
                Things People Say
            </Typography>
            <RecommendationSlider recommendations={recommendations} />
            <Link>
                View More
            </Link>
        </Container>
    )
}

export default Recommendations;