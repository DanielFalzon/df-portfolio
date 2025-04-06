import { Recommendation } from "@/types/Types"
import { Button, Container, Link, Typography } from "@mui/material"
import { FC } from "react";
import RecommendationSlider from "../recommendation-slider/RecommendationSlider";

type RecommendationsProps = {
    recommendations: Recommendation[];
}

const Recommendations: FC<RecommendationsProps> = ({recommendations}) => {
    return(
        <>
            <Typography
                variant="h2"
                id='recommendations'
            >
                Things People Say
            </Typography>
            <RecommendationSlider recommendations={recommendations} />
        </>
    )
}

export default Recommendations;