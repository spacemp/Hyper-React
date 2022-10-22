import CheckoutProduct from "../component/CheckoutProduct";
import './CheckoutPage.css';
import Subtotal from "../component/Subtotal";
import {useStateValue} from '../store/StateProvider'

function CheakoutPage(){

    const[{basket}, dispatch]=useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://i.stack.imgur.com/Bqbb0.png" 
                alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout_title">
                        لیست خرید شما
                    </h2>
                    {basket.map(item =>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>

    

    )
};

export default CheakoutPage;