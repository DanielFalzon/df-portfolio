import { ExperienceItem } from "@/types/Types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FC, ReactNode, SyntheticEvent, useState } from "react";

type ExperienceListItemsDesktopProps = {
    experienceItems: ExperienceItem[]
}

type TabPanelProps = {
    children?: ReactNode,
    index: number,
    value: number
}

const TabItemProps = (index: number) => {
    return {
        key: `experience-vertical-tab-${index}`,
        id: `experience-vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    }
}

const TabPanel:FC<TabPanelProps> = ({children, index, value}) => (
    <div 
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Experience vertical tabs"
                variant="standard"
                sx={{
                    width: '700px'
                }}
            >
                {experienceItems.map((item, index) => (
                    <Tab label={item.company} {...TabItemProps(index)} />
                ))}
            </Tabs>
            {experienceItems.map((item, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {item.description}
                </TabPanel>
            ))}

        </Box>
    )
}

export default ExperienceListItemsDesktop;