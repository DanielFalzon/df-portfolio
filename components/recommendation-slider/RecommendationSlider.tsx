"use client"

import { Recommendation } from "@/types/Types";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

type RecommendationSliderProps = {
    recommendations: Recommendation[]
}

const RecommendationSlider: FC<RecommendationSliderProps> = ({recommendations}) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    }
    
    return(
        <Box
            sx={{
                padding:'2rem',
                border: '3px solid'
            }}
        >
            <Slider {...settings}>
                {recommendations.map((item, index) => (
                    <>
                        <Typography
                            key={`recom-slide-${index}`}
                            variant="body1"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                padding: {md: '2rem 0px'}
                            }}
                        >
                            {item.text}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                paddingTop: '1rem',
                                textAlign: 'right'
                            }}
                        >
                            {item.author}
                            <br />
                            {item.position}
                        </Typography>
                    </>
                ))}
            </Slider>
        </Box>
    )
}

export default RecommendationSlider;