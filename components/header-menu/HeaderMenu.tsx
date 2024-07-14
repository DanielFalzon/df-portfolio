// Implementation of https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
'use client'

import { FC, useState } from "react";

import { AppBar, Box, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu } from '@mui/icons-material';
import { MenuItem } from "@/types/Types";
import MenuDrawer from "../menu-drawer/MenuDrawer";

type HeaderMenuProps = {
    menuItems: MenuItem[]
}

const HeaderMenu: FC<HeaderMenuProps> = ({menuItems}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" elevation={0}>
                <Toolbar sx={{height: '5rem'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none'}}}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Dan
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block'}}}>
                        {menuItems.map((item) => (
                            <Button key={item.name} sx={{ color: '#fff'}} href={item.link}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <MenuDrawer 
                    enabled={mobileOpen}
                    callback={handleDrawerToggle}
                    menuItems={menuItems} 
                />
            </nav>
        </Box>
    )
}

export default HeaderMenu;