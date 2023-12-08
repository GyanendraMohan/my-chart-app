import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Divider, Box } from '@mui/material';
import { Product } from '../interfaces/products';

interface SingleProductCardProps {
    product: Product;
}

const SingleProductCard: React.FC<SingleProductCardProps> = ({ product }) => {

    return (
        <Card sx={{ height: "100vh", display: "flex" }}>
            {/* <Box height={20} /> */}
            <Grid container >
                <Grid item xs={12} sm={4}>
                    <CardMedia
                        sx={{ height: "90%", objectFit: "contain", margin: "10%" }}
                        image={product.image}
                        title={product.title}
                    />
                </Grid>
                <Divider component="div" orientation="vertical" />
                <Grid item xs={12} sm={6}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="subtitle1">
                            Price: ${product.price}
                        </Typography>
                        <Typography variant="subtitle2">
                            Category: {product.category}
                        </Typography>
                        <Typography variant="subtitle2">
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SingleProductCard;