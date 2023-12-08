import React from 'react'
import SideNav from '../components/SideNav'
import { Box } from '@mui/material'
import NavBar from '../components/NavBar'
import ProductList from './product/ProductList'

const Products = () => {
    return (
        <>
            <div className="bgcolor">
                <Box height={70} />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProductList />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Products;