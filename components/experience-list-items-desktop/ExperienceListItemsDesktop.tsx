import { formatDate } from "@/app/utils";
import { ExperienceItem } from "@/types/Types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FC, ReactNode, SyntheticEvent, useState } from "react";

type ExperienceListItemsDesktopProps = {
    experienceItems: ExperienceItem[]
}

type TabPanelProps = {
    children?: ReactNode,
    index: number,
    value: number,
    content:ExperienceItem
}

const TabPanel:FC<TabPanelProps> = ({children, index, value, content}) => (
    <div 
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
    >
        {value === index && (
        <Box sx={{ paddingLeft: '3.5rem' }}>
            <Typography
                sx={{
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }}
            >
                {formatDate(content.dayFrom) + ' - ' + formatDate(content.dayTo)}
            </Typography>
            <Typography variant="body1">{content.description}</Typography>
        </Box>
      )}
    </div>
)

const ExperienceListItemsDesktop:FC<ExperienceListItemsDesktopProps> = ({experienceItems}) => {
    const[value, setValue] = useState(0);
    
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return(
        <Box
            sx={{ bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Experience vertical tabs"
                variant="standard"
                sx={{
                    overflow: 'visible'
                }}
            >
                {experienceItems.map((item, index) => (
                    <Tab 
                        label={
                            <Typography variant="h4">
                                {item.company}
                            </Typography>
                        } 
                        key={`experience-vertical-tab-${index}`}
                        id={`experience-vertical-tab-${index}`}
                        aria-controls={`vertical-tabpanel-${index}`}
                        disableRipple={true}
                        sx={{
                            padding: '3rem 0px 3rem 1.5rem',
                            width: '22rem',
                            borderRight: 0
                        }}
                    />
                ))}
            </Tabs>
            {experienceItems.map((item, index) => (
                <TabPanel 
                    key={index} 
                    value={value} 
                    index={index}
                    content={item}
                >
                        {item.description}
                </TabPanel>
            ))}

        </Box>
    )
}

export default ExperienceListItemsDesktop;