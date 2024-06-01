'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Person } from "@mui/icons-material";

const Banner = () => {
    const theme = useTheme();

    return(
        <Box 
            color=""
            sx={{ 
                width: '100vw',
                backgroundColor: theme.palette.primary.main,
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
            </Container>
            <Button variant="outlined" color="inherit" size="large" sx={{ width: '100%', height: '4rem', marginTop: '2rem'}}>
                GET IN TOUCH
            </Button>
            <Container>
                <Person />
            </Container>
        </Box>
    )
}

export default Banner;