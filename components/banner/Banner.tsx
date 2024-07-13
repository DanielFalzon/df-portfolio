import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import profilepic from "./profilepic.png";


const Banner = () => {
    return(
        <Box 
            color=""
            sx={{ 
                width: '100%',
                
                bgcolor: 'primary.main',
                paddingTop: '6rem',
                paddingRight: '1rem',
                paddingLeft: '1rem',
                boxSizing: 'border-box'
            }}
        >
            <Container
                sx={{
                    height: {xs: 'auto', md: '595px'},
                    overflow: 'hidden',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: {xs: 'column', md: 'row'}
                }}
            >
                <Container>
                    <Typography sx={{fontSize: '1.6rem', color: 'white'}}>Hi, my name is</Typography>
                    <Typography variant="h1" sx={{fontSize: '6rem', color: 'white'}}>Dan Falzon</Typography>
                    <Typography sx={{fontSize: '1.6rem', color: 'white', marginTop: '1rem'}}>Software Engineer & Manager</Typography>
                    <Button 
                        variant="outlined" 
                        color='secondary'
                        href="#contact"
                        size="large" 
                        sx={{ 
                            width: {xs: '100%', md: '210px'}, 
                            height: '4rem', 
                            marginTop: '2rem'
                        }}
                    >
                        GET IN TOUCH
                    </Button>
                </Container>
                
                <Container sx={{
                    marginTop: { xs: '3rem', md: 0},
                    width: 'auto',
                    textAlign: 'center'
                }}>

                    <Image 
                        src={profilepic}
                        alt="Picture of Daniel Falzon"
                    />
                </Container>
            </Container>
            
        </Box>
    )
}

export default Banner;