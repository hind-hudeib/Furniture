import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="d-flex py-2 px-lg-6 border-bottom border-gray-200 w-100 fw-light text-gray-500 ms-4">
      <div className="w-100 min-height-150 d-flex align-items-center ms-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-80" src={image} alt="" />
        </Link>
        <div className="w-100 d-flex flex-column">
          {/* title and remove icon */}
          <div className="d-flex justify-content-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm text-uppercase fw-medium max-w-240 text-primary underline:hover"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 text-danger:hover transition" />
            </div>
          </div>
          <div className="d-flex gx-2 h-36 text-sm">
            {/* quantity */}
            <div className="d-flex flex-1 max-w-100 align-items-center h-100 border text-primary fw-medium">
              <div onClick={()=>decreaseAmount(id)} className="h-100 d-flex flex-1 justify-content-center align-items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-100 d-flex justify-content-center align-items-center px-2">
                {amount}
              </div>
              <div onClick={()=>increaseAmount(id)} className="h-100 d-flex justify-content-center align-items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="d-flex flex-grow-1 justify-content-around align-items-center">
              $ {price}
            </div>
            {/* final price */}
            <div className="d-flex flex-grow-1 justify-content-end align-items-center">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
