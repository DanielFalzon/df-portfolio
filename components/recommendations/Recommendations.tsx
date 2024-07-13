import { Recommendation } from "@/types/Types"
import { Button, Container, Link, Typography } from "@mui/material"
import { FC } from "react";
import RecommendationSlider from "../recommendation-slider/RecommendationSlider";

type RecommendationsProps = {
    recommendations: Recommendation[];
}

const Recommendations: FC<RecommendationsProps> = ({recommendations}) => {
    return(
        <Container
            sx={{
                textAlign: 'center'
            }}
        >
            <Typography
                variant="h2"
            >
                Things People Say
            </Typography>
            <RecommendationSlider recommendations={recommendations} />
        </Container>
    )
}

export default Recommendations;