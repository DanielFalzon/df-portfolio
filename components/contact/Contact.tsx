import { LinkedIn, GitHub } from "@mui/icons-material"
import { Box, Button, Container, Typography } from "@mui/material"

const Contact = () => {
    return(
        <Container>
            <Box>
                <Typography variant='h2' id="contact">
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
                    alignItems: 'end',
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