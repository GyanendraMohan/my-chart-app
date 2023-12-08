import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from '@mui/icons-material/Home';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SideNav() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const theme = useTheme();
    // const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const toggleState = useSelector((state: RootState) => state.toggle);




    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Box height={30} />
            <Drawer variant="permanent" open={toggleState.isOpen}>
                <DrawerHeader>
                    <IconButton >
                        {
                            theme.direction === 'rtl' ? (<ChevronRightIcon />) : (<ChevronLeftIcon />)
                        }
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: toggleState.isOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: toggleState.isOpen ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ opacity: toggleState.isOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/products")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: toggleState.isOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: toggleState.isOpen ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <ShoppingBagIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" sx={{ opacity: toggleState.isOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/about")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: toggleState.isOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: toggleState.isOpen ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <ReadMoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" sx={{ opacity: toggleState.isOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/settings")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: toggleState.isOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: toggleState.isOpen ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" sx={{ opacity: toggleState.isOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/analytics")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: toggleState.isOpen ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: toggleState.isOpen ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <AnalyticsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Analytics" sx={{ opacity: toggleState.isOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
        </Box>
    );
}
