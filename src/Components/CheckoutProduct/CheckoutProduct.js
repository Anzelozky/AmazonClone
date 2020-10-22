import React from 'react'
import { useStateValue } from "../../StateManagement/StateProvider"
import "./CheckoutProduct.css"

function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutproduct" key={id}>
            <img
                className="checkoutproduct__image"
                src={image}
                alt="product"
            />

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct__rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <span key={i} role="img" aria-label="star">
                        ⭐
                    </span>
                ))}
                </div>
                
                <span>
                    <button onClick={() => removeFromBasket()}>Remover de la canasta</button>
                </span>

            </div>

            
        </div>
    )
}

export default CheckoutProduct
