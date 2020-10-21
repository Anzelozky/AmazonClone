import React from 'react'
import { useStateValue } from '../../StateManagement/StateProvider'
import "./Product.css"

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    //Action that triggers dispatch on global reducer
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    
    return (
        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong></p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="product__image"/>

            <button onClick={addToBasket} className="product__button">Add to basket</button>
        </div>
    )
}

export default Product
