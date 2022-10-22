import React from "react";

import {useStateValue} from '../store/StateProvider'
import Button from "../Ui/Button";
import Card from "../Ui/Card";

import './Product.css';

function Product(props) {

    const[state, dispatch]=useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title:props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };

    return (
        <div className="product">
            <Card>
                <div className="product__info" dir="rtl">
                    <p>{props.title}</p>
                    <div className="product__rating">
                        {Array(props.rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <p className="product__price">
                        <strong>{props.price}</strong>
                        <small>  تومان  </small>
                    </p>
                </div>
            </Card>
            <img className="img__h" src={props.image} alt='' />
            <Button onClick={addToBasket} >بفرست به سبد خرید</Button>
        </div>
    )
};
export default Product;