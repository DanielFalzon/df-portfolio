'use client'

import { formatDate } from "@/app/utils";
import { ExperienceItem } from "@/types/Types";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";

type ExperienceListItemsMobileProps = {
    experienceItems: ExperienceItem[]
}

const ExperienceListItemsMobile: FC<ExperienceListItemsMobileProps> = ({experienceItems}) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel : string) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

        return(
        <>
            {experienceItems.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    disableGutters
                    elevation={0}
                    sx={{
                        padding: '30px 0px 30px 15px'
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={item.company + "-header"}
                        id={index + "-header"}
                    >
                        <Typography variant="h4">
                            {item.company}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography 
                            variant="body1"
                            sx={{
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                        >
                            {formatDate(item.dayFrom) + ' - ' + formatDate(item.dayTo)}
                        </Typography>
                        <Typography variant="body1">
                            {item.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}

export default ExperienceListItemsMobile;