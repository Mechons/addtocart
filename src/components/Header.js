import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { NavLink } from "react-router-dom";
import { deleteItem } from "../Redux/Action/Action";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  const deletItem = (id) => {
    dispatch(deleteItem(id));
  };

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const totalPrice = () => {
    let price = 0;
    getData.map((ele) => {
      price += ele.price*ele.qnty;
    });
    setPrice(price);
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <Nav.Link to="/" className="text-light">
            Add to Cart
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Restraunt Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cart/${item.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={item.imgdata}
                                style={{
                                  width: "5rem",
                                  height: "5rem",
                                  margin: "1rem,0",
                                }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{item.rname}</p>
                            <p>Price : {item.price}</p>
                            <p>Quantity : {item.qnty}</p>

                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => deletItem(item.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => deletItem(item.id)}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p> Total Price : {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 20 }}> Your Cart is Empty</p>
              <img
                src="./cart.gif"
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};
