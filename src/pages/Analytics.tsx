
import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import NavBar from '../components/NavBar'
import { GeoChart } from '../charts/GeoChart'
import { GanttChart } from '../charts/GanttChart'
import { GaugeChart } from '../charts/GaugeChart'

const Analytics = () => {
    return (
        <>
            <div className="bgcolor">
                <Box height={70} />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack spacing={2} direction="row">
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 19 + 'vh' }} className="gradient">
                                            <CardContent>
                                                <div className="iconStyle">

                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    $1800.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total Income
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + 'vh', marginTop: "16px" }} className="gradientLight">
                                            <CardContent>
                                                <div className="iconStyle">

                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    600.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total Orders
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 19 + 'vh' }} className="gradient">
                                            <CardContent>
                                                <div className="iconStyle">

                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    $1800.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total Income
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ height: 19 + 'vh', marginTop: "16px" }} className="gradientLight">
                                            <CardContent>
                                                <div className="iconStyle">

                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    600.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total Orders
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GanttChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + 'vh' }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + 'vh' }}>
                                    <CardContent sx={{ paddingLeft: "15%" }}>
                                        <Box height={100} />
                                        <GaugeChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </div>
        </>
    )
}

export default Analytics;