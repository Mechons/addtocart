import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import "./Style.css"
// import {NavLink} from 'react-router-dom;'

export const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.target);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <Nav.Link to="/" className='text-light'>Add to Cart</Nav.Link>
                    <Nav className="me-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className="card_details"  style={{width:"24rem",padding:10}}>
                        <i className='fas fa-close smallclose'
                        onClick={handleClose}
                        style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}>
                        </i>
                        <p style={{fontSize:20}}> Your Cart is Empty</p>
                        <img src="./cart.gif" className='emptycart_img' style={{width:"5rem",padding:10}} />
                        </div> 
                </Menu>

            </Navbar>
        </>
    )
}
