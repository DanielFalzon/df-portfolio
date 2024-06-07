'use client'

import { ExperienceItem } from "@/types/Types";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import ExperienceListItemsMobile from "../experience-list-items-mobile/ExperienceListItemsMobile";
import ExperienceListItemsDesktop from "../experience-list-items-desktop/ExperienceListItemsDesktop";

type ExperienceListProps = {
    experienceItems: ExperienceItem[]
}

const ExperienceList: FC<ExperienceListProps> = ({experienceItems}) => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <Container>
            <Typography variant="h2">
                Experience
            </Typography>
            <Box
                sx={{
                    borderLeft: '3px solid',   // Define the width of the left border
                    borderImage: 'linear-gradient(to bottom, red, blue) 1', // Apply a gradient to the left border
                }}
            >
            {isMobile ?
                <ExperienceListItemsMobile experienceItems={experienceItems} /> : 
                <ExperienceListItemsDesktop experienceItems={experienceItems} />
            }
            </Box>
        </Container>
    )
}

export default ExperienceList;