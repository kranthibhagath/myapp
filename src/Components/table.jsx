
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState, useEffect } from 'react';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
function CartTabel({ cart, setCart, handleChange, handlePrice, modal, item_info, price }) {
    const [items, setitems] = useState(0);
    const handleitems = () => {
        let ans = 0;
        cart.map((item) => (ans += item.qty));
        setitems(ans)
    };
    const ProductList = item_info ? (item_info.filter(function (el) {
        return !cart.find(function (objFromB) {
            return el.id === objFromB.id
        })
    })) : cart;
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
        handleitems();
    }
    const handleAdd = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item])
    };
    const ProductPrice = (a, b) => {
        return a * b
    }
    useEffect(() => {
        handlePrice();
        handleitems();
    });
    return (
        <Table sx={{ maxWidth: 1000 }} aria-label="spanning table">
            <TableBody>
                {ProductList.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell align="center" style={{ width: 20 }}>
                            <img className='ProductImage' src={row.imglg} alt={row.imglg} />
                        </TableCell>
                        <TableCell align="left" style={{ width: 150 }}>
                            <div className='ProductDetailsContainer'>
                                <span className="ProductName">{row.name}</span>
                                <span className="ProductPrice">US$ {row.price}</span>
                            </div>
                        </TableCell>
                        {modal ?
                            (<TableCell align="right">
                                <button fontWeight={700} onClick={() => handleAdd(row)}>Add</button>
                            </TableCell>) : (
                                <>
                                    <TableCell align="center" >
                                        <div className='ProductQuantityContainer'>
                                            <RemoveCircleOutlineIcon
                                                size={16}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    handleChange(row, -1);
                                                }}
                                            />
                                            <strong className='ProductQuantity'>{row.qty}</strong>
                                            <AddCircleOutlineIcon
                                                size={16}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    handleChange(row, 1);
                                                }}
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography fontWeight={700}>${ProductPrice(row.qty, row.price)}</Typography>
                                        <Button ><Link fontWeight={700} onClick={() => handleRemove(row.id)} sx={{ color: 'red' }}>Remove</Link></Button>
                                    </TableCell>

                                </>

                            )}

                    </TableRow>
                ))}
                {!modal ? (<TableRow>
                    <TableCell colSpan={2} />
                    <TableCell >
                        {/* <Avatar variant="rounded" src="avatar1.jpg" /> */}
                        <Stack align="right" spacing={0.5}>
                            <Typography fontWeight={700}>Sub-Total</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {items} items
                            </Typography>
                        </Stack>
                    </TableCell>
                    <TableCell align="right"><Typography fontWeight={700} fontSize={24}>${price}</Typography></TableCell>
                </TableRow>) : ""}
            </TableBody>
        </Table>
    )
};
export default CartTabel;