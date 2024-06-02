import { Box, Button, Container, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

const Banner = () => {
    return(
        <Box 
            color=""
            sx={{ 
                width: '100vw',
                height: {xs: 'auto', md: '700px'},
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                bgcolor: 'primary.main',
                paddingTop: '6rem',
                paddingRight: '1rem',
                paddingLeft: '1rem',
                boxSizing: 'border-box'
            }}
        >
            <Container disableGutters>
                <Typography sx={{fontSize: '1.6rem'}}>Hi, my name is</Typography>
                <Typography variant="h1" sx={{fontSize: '6rem'}}>Daniel Falzon</Typography>
                <Typography sx={{fontSize: '1.6rem'}}>Software Engineer in Malta</Typography>
                <Button variant="outlined" color="inherit" size="large" sx={{ width: '100%', height: '4rem', marginTop: '2rem'}}>
                    GET IN TOUCH
                </Button>
            </Container>
            
            <Container sx={{
                marginTop: { xs: '3rem', md: 0},
                width: 'auto',
                textAlign: 'center'
            }}>
                <Person sx={{
                    height: '100%',
                    width: '100%',
                    maxWidth: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} />
            </Container>
        </Box>
    )
}

export default Banner;