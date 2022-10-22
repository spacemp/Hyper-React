import React from "react";
import Button from "../Ui/Button";


import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from '../store/reducer';



function Subtotal() {

    const [{ basket }, dispatch] = useStateValue()

    const numberOfCart = basket.length;

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({numberOfCart} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type='checkbox' /> This order contains a gift

                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}

            />
            <Button>تکمیل خرید</Button>
        </div>
    )
};

export default Subtotal;