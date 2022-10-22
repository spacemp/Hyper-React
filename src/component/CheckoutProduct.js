import React from "react";
import { useStateValue } from "../store/StateProvider";

import Button from "../Ui/Button";


import './CheckoutProduct.css';


function CheckoutProduct(props) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id,
        })
    };

    return (
        <div className="checkoutProduct">
            <img src={props.image}
                alt="" className="checkoutProduct__image" />
            <div className="product__info">
                <p>
                    {props.title}
                </p>
                <p className="checkoutProduct__price">
                    <strong>{props.price}</strong>
                    <small>تومان</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <Button onClick={removeFromBasket} >حذف از لیست خرید</Button>
            </div>
        </div>
    )
}

export default CheckoutProduct;