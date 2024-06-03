import { ContentItem, ContentItemType } from "@/types/Types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type ContentItemProps = {
    contentItems: ContentItem[]
}


const ContentItemRenderer: FC<{item: ContentItem}> = ({ item }) => {
    switch (item.type){
        case ContentItemType.h2: 
        case ContentItemType.h3:
            return <Typography variant={item.type}>{item.content}</Typography>
        case ContentItemType.p:
            return <Typography variant="body1">{item.content}</Typography>
        case ContentItemType.img:
            if(item.ImageProperties){
                return (
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        <Image
                            src={item.content}
                            width={item.ImageProperties.width}
                            height={item.ImageProperties.height}
                            alt={item.ImageProperties.alt}
                        />
                    </Box>
                )
            }
    }
}

const ContentLoader: FC<ContentItemProps> = ({contentItems}) =>{
    return(
        <>
            {contentItems.map((item, index) => (
                <ContentItemRenderer key={index} item={item} />
            ))}
        </>
    )
}

export default ContentLoader;