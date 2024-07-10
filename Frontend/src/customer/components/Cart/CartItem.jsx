import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import oil from "../../Pages/oil.jpg"
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
const CartItem = ({ item, showButton }) => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleRemoveItemFromCart = () => {
      const data = { cartItemId: item?._id, jwt };
      dispatch(removeCartItem(data));
    };
    const handleUpdateCartItem = (num) => {
      const data = {
        data: { quantity: item.quantity + num },
        cartItemId: item?._id,
        jwt,
      };
      console.log("update data ", data);
      dispatch(updateCartItem(data));
    };
  return (
    <div className="p-5 shadow-1g border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl[0].url}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          {/* <p className="opacity-70">Size: 1L</p> */}
          <p className="opacity-70 mt-2">Seller: Amrti</p>
          <div className="flex space-x-5 items-center text-gray-900 ptI6">
            <p className="font-semibold">₹{item?.product?.price}</p>

            <p className="opacity-50 line-through">
              ₹{item?.product?.discountedPrice}{" "}
            </p>
            <p className="text-green-600 font-semibold">
              {" "}
              {item?.product?.discountPersent}% Off
            </p>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
              color="primary"
              aria-label="add an alarm"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">
              {item?.quantity}
            </span>
            <IconButton
              onClick={() => handleUpdateCartItem(1)}
              color="primary"
              aria-label="add an alarm"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="text">
              Remove{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
