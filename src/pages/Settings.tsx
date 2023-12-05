import React from 'react'
import SideNav from '../components/SideNav'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar'

const Settings = () => {
    return (
        <>
            <Box height={30} />
            <NavBar />
            <Box sx={{ display: "flex" }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Settings</h1>
                </Box>
            </Box>
        </>
    )
}

export default Settings;