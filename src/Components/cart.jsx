
import { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import BasicModal from "./modal";

import CartTabel from "./table";
const Cart = ({ cart, setCart, handleChange, item_info }) => {
    const [price, setprice] = useState(0);
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.price * item.qty));
        setprice(ans)
    };
    const button_style = {
        width: '200px',
        borderRadius: 5,
        bgcolor: '#3489eb',
        color: "#fff"
    }
    return (
        <Container maxWidth="md" xs={{
            p: 1,
            bgcolor: "#fff",
        }}>
            <Box sx={{
                align: "center",
                p: 1,
                display: "flex",
                bgcolor: "#fff",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: 2
            }}>
                <Paper elevation={0}
                    sx={{
                        display: 'flex', justifyContent: 'space-between', p: 1, m: 1, borderRadius: 1,
                    }}
                >
                    <Typography variant="h5" component="h5">
                        Shopping Cart
                    </Typography>
                    <Link component="button" variant="body2" onClick={() => {
                        setCart([])
                    }}
                        sx={{ color: 'red' }}
                    >
                        Remove all
                    </Link>
                </Paper>
                <CartTabel cart={cart} setCart={setCart} handleChange={handleChange} handlePrice={handlePrice} modal={false} price={price} />

                <Paper elevation={0}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1, m: 1, borderRadius: 1
                    }}
                >
                    <Typography variant="h5" component="h5" xs={{}}>
                        <BasicModal cart={cart} setCart={setCart} handleChange={handleChange} handlePrice={handlePrice} item_info={item_info} />
                    </Typography>
                    <Button component="button" variant="contained" sx={button_style} onClick={() => {
                        console.info("I'm a button.");
                    }}
                    >
                        Checkout
                    </Button>
                </Paper>
            </Box>

        </Container>
    )
}
export default Cart;