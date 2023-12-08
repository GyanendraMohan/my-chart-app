import React, { useEffect, useState } from 'react'

import { Box } from '@mui/material'
import NavBar from '../../components/NavBar';
import SideNav from '../../components/SideNav';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/products';
import axios from 'axios';
import SingleProductCard from '../../components/SingleProductCard';


const SingleProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [singleProduct, setSingleProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product | null>(`https://fakestoreapi.com/products/${id}`);
                setSingleProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);
    // console.log(singleProduct);

    return (
        <>
            <div className="bgcolor">
                <Box height={70} />
                <NavBar />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {singleProduct && (
                            <SingleProductCard product={singleProduct} />
                        )}
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default SingleProduct;