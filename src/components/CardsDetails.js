import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Style.css";
import { deleteItem } from "../Redux/Action/Action";

export const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };
  console.log(data);
  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();
  const onRemove = (id) => {
    dispatch(deleteItem(id));
    setData(getData)
  };
  
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((element, id) => {
              return (
                <>
                  <div className="items_img">
                    <img src={element.imgdata} alt="" srcset="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restraunt</strong> : {element.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹{element.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {element.address}
                          </p>
                          <p>
                            <strong>Total</strong> : $ 300
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {" "}
                              {element.rating} ★{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{element.somedata} </span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => onRemove(element.id)}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
