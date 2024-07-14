"use client"

import { Recommendation } from "@/types/Types";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";

type RecommendationSliderProps = {
    recommendations: Recommendation[]
}

const RecommendationSlider: FC<RecommendationSliderProps> = ({recommendations}) => {
    const settings = {
        arrows: false,
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

    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;
    
    return(
        <Box
            sx={{
                padding:{xs: '2rem 1rem', md: '3rem 4rem'},
                border: '2px solid',
                borderImage: `linear-gradient(to bottom, ${primaryColor}, black) 1`
            }}
        >
            <Slider {...settings}>
                {recommendations.map((item, index) => (
                    <>
                        <Typography
                            key={`recom-slide-${index}`}
                            variant="body1"
                            sx={{
                                textAlign: 'left',
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