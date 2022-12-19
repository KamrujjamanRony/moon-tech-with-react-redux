import React from "react";
import { BiTrash, BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product.id}
    >
      {pathname.includes("cart") && (
      <div className="grid justify-center items-center bg-indigo-500 text-white p-1 rounded-full absolute top-2 right-2 h-8 w-8">
        <p>{product.quantity}</p>
      </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {/* {product.keyFeature.map((feature) => {
            return <li className="text-sm ">{feature}</li>;
          })} */}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            title="Delete"
            className="bg-red-500 w-full text-lg text-white px-4 py-1 rounded-full flex justify-between items-center"
          >
            Remove
            <BiTrash size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
