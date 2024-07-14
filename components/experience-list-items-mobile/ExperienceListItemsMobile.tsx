'use client'

import { formatDate } from "@/app/utils";
import { ExperienceItem } from "@/types/Types";
import { ExpandMore, CheckCircleOutline } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { FC, SyntheticEvent, useEffect, useLayoutEffect, useState } from "react";

type ExperienceListItemsMobileProps = {
    experienceItems: ExperienceItem[]
}

const ExperienceListItemsMobile: FC<ExperienceListItemsMobileProps> = ({experienceItems}) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel : string) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    /**
     * 
     * This needs to change to the following:
     * 
     * a.) On open of a component.
     * b.) Get the previous component that was opened.
     * c.) If no component was open, then we scroll to view the new header.
     * d.) If a component was open but was above new component, then we scroll to view the new header.
     * e.) If a component was open but below the new component
     * f.) Get the height of the content.
     * g.) get current y index.
     * h.) append height with y index of title
     */
    const scrollToView = (closedPannel: string) => {
        if(!expanded) return;

        console.log(`Closed Panel: ${closedPannel}`);
        console.log(`New Pannel: ${expanded}`);

        const titleHeight = 100;
        const prevIndex = parseInt(closedPannel.split('-')[1]);
        const newIndex = parseInt(expanded.split('-')[1]);

        //1. if the new index is lower, just scroll to the element
        if(newIndex <= prevIndex){
            //TODO: Still need to handle the header issue
            document.getElementById(expanded + '-header')?.scrollIntoView();
            return
        }

        //if the new index is higher (going down the list)...

        //2. get the y offest to scroll to

        //3. get the height of the content that will be closed 
    }
    
    return(
        <>
            {experienceItems.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel-${index}`}
                    onChange={handleChange(`panel-${index}`)}
                    slotProps={{ transition: {onExit: () => {
                        scrollToView(`panel-${index}`);
                    }}}}
                    disableGutters
                    elevation={0}
                    sx={{
                        padding: '30px 0px 30px 15px'
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={item.company + "-header"}
                        id={`panel-${index}-header`}
                    >
                        <Typography variant="h4" id={`panel-${index}-title`}>
                            {item.company}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        id={`panel-${index}-content`}
                    >
                        <Typography 
                            variant="body2"
                            sx={{
                                fontStyle: 'italic',
                                pb: '1rem'
                            }}
                        >
                            {formatDate(item.dayFrom) + ' - ' + formatDate(item.dayTo)}
                        </Typography>
                        <Typography variant="body1">{item.position}</Typography>
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                        <List dense={true}>
                            {
                                item.skills.map((skill, i) => (
                                    <ListItem
                                    key={`skill-${i}`}
                                    >
                                        <ListItemIcon>
                                            <CheckCircleOutline />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={skill}
                                            sx={{
                                                marginBottom: 0,    
                                                marginTop: '1rem'
                                            }}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}

// sat 0, 

export default ExperienceListItemsMobile;