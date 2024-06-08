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
            <Button 
                variant="outlined" 
                color='primary'
                size="large" 
                sx={{ 
                    width: {xs: '100%', md: '210px'}, 
                    height: '4rem', 
                    marginTop: '1rem'
                }}
            >
                    READ MORE
            </Button>
        </Container>
    )
}

export default Recommendations;