import React from "react";
import SideNav from "../components/SideNav";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Dash.css';
import AccordianDashboard from "../components/AccordianDashboard";
import { BarChart } from "../charts/BarChart";

const Home = () => {
    return (
        <>
            <div className="bgcolor">
                <Box height={70} />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + '%', height: 152 }} className="gradient">
                                        <CardContent>
                                            <div className="iconStyle">
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                $1800.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Income
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + '%', height: 152 }} className="gradientLight">
                                        <CardContent>
                                            <div className="iconStyle">
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                600.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>

                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ minWidth: 49 + '%' }} className="gradientLight">

                                        <Stack spacing={2} direction='row'>
                                            <div className="iconStyle">
                                                <StorefrontIcon />
                                            </div>
                                            <div className="paddingAll">
                                                <span className="pricetitle">$200k</span>
                                                <br />
                                                <span className="pricesubtitle">Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card sx={{ minWidth: 49 + '%' }}>

                                        <Stack spacing={2} direction='row'>
                                            <div className="iconStyleBlack">
                                                <StorefrontIcon />
                                            </div>
                                            <div className="paddingAll">
                                                <span className="pricetitle">$200k</span>
                                                <br />
                                                <span className="pricesubtitle">Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                </Stack>
                            </Grid>

                        </Grid>
                        <Box height={15} />
                        <Stack>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Card sx={{ height: 60 + 'vh' }}>
                                        <Box height={10} />
                                        <CardContent>
                                            <BarChart />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ height: 60 + 'vh' }}>
                                        <CardContent>
                                            <div className="paddingAll">
                                                <span className="pricetitle">Top Products</span>
                                            </div>
                                            <Box height={10} />
                                            <AccordianDashboard />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Home;
