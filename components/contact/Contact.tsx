import { GitHub, LinkedIn } from "@mui/icons-material"
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material"

const Contact = () => {
    return(
        <Container
            
            sx={{
                borderTop: '2px solid',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                borderImage: 'linear-gradient(to right, #c2a703, black) 1',
                marginTop: '4rem',
                marginBottom: '4rem',
                width: '100vw'
            }}
        >
            <Box
                sx={{
                    flex: '1'
                }}
            >
                <Typography variant='h2'>
                    Contact Me
                </Typography>
                <Typography variant="body1">
                    Wish to reach out to collaborate on a project or discuss one of my blog posts? Feel free to reach out! 
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    marginTop: {xs: '2rem', md: '4rem'},
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >

                    <Button
                        key="two"
                        variant="outlined"
                        startIcon={<LinkedIn />}
                        sx={{
                            width: {xs: '90%', md: '50%'},
                            marginBottom: '2rem',
                            height: '70px'
                        }}
                    >LinkedIn</Button>
                    <Button
                        key="one"
                        variant="outlined"
                        startIcon={<GitHub />}
                        sx={{
                            width: {xs: '90%', md: '50%'},
                            height: '70px'
                        }}
                    >GitHub</Button>
                    
            </Box>
        </Container>
    )
}

export default Contact