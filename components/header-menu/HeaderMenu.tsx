// Implementation of https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
'use client'

import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material';
import { useState } from "react";

const HeaderMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none'}}}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderMenu;