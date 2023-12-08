import React from 'react'

import { Box } from '@mui/material'
import NavBar from '../../components/NavBar';
import SideNav from '../../components/SideNav';


const SingleProduct = () => {
    return (
        <>
            <div className="bgcolor">
                <Box height={70} />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1>Single product</h1>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default SingleProduct;