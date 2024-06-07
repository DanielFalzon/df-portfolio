import { ExperienceItem } from "@/types/Types";
import { Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";

type ExperienceListItemsDesktopProps = {
    experienceItems: ExperienceItem[]
}

const TabItemProps = (index: number) => {
    return {
        key: `experience-vertical-tab-${index}`,
        id: `experience-vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    }
}

const ExperienceListItemsDesktop:FC<ExperienceListItemsDesktopProps> = ({experienceItems}) => {
    const[value, setValue] = useState(0);
    
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return(
        <>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Experience vertical tabs"
            >
                {experienceItems.map((item, index) => (
                    <Tab label={item.company} {...TabItemProps(index)} />
                ))}

            </Tabs>
        </>
    )
}

export default ExperienceListItemsDesktop;