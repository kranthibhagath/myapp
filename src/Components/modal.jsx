import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CartTabel from "./table";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    height: '500px',
};
const button_style = {
    width: '200px',
    borderRadius: 5,
    bgcolor: '#3489eb',
    color: "#fff"
}


export default function BasicModal({ cart, setCart, handleChange, handlePrice, item_info }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button sx={button_style} onClick={handleOpen} variant="contained">Add Products</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} maxWidth="md">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Products
                    </Typography>
                    <CartTabel cart={cart} setCart={setCart} handleChange={handleChange} handlePrice={handlePrice} modal={true} item_info={item_info} />
                </Box>
            </Modal>
        </div >
    );
}