import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { Product } from '../../interfaces/products';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [rows, setRows] = useState([])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    const deleteProduct = async (productId: number) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: `You are about to delete this product ${productId}. This action cannot be undone!.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            });

            if (result.isConfirmed) {
                await axios.delete(`https://fakestoreapi.com/products/${productId}`);
                setProducts(products.filter((item) => item.id !== productId));
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'The product has been deleted.',
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    icon: 'error',
                    title: 'Cancelled',
                    text: 'The deletion has been cancelled.',
                });
            }
        } catch (error) {
            console.error(`Error deleting product with ID ${productId}:`, error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete the product. Please try again later.',
            });
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography variant="h5" gutterBottom component='div' sx={{ padding: "20px" }}>
                Products
            </Typography>
            <Divider />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="left"
                            >
                                Id
                            </TableCell>
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Rating</TableCell>
                            <TableCell align="left">Number of Reviews</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((product) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={product.id}>
                                    <TableCell align='left'>{product.id}</TableCell>
                                    <TableCell align="left">{product.title.slice(0, 30)}</TableCell>
                                    <TableCell align="left">${product.price}</TableCell>
                                    <TableCell align="left">{product.category}</TableCell>
                                    <TableCell align="left">{product.rating.rate}</TableCell>
                                    <TableCell align="left">{product.rating.count}</TableCell>
                                    <TableCell align="left">
                                        <Stack spacing={2} direction="row">
                                            <EditIcon sx={{ color: "blue" }} />
                                            <DeleteIcon sx={{ color: "red" }} onClick={() => deleteProduct(product.id)} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 100]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}