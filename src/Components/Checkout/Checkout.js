import React from 'react'
import { useStateValue } from '../../StateManagement/StateProvider'
import "./Checkout.css"
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
import Subtotal from "../Subtotal/Subtotal"

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="banner"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Tu canasta está vacía</h2>
                        <p>
                            No tienes artículos en tu canasta. Para comprar uno o más, da click en "Añadir a la canasta"
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2>Tu canasta: </h2>
                        
                        {basket?.map( i => (
                            <CheckoutProduct
                            key={i.id}
                            id = {i.id}
                            title = {i.title}
                            image = {i.image}
                            price = {i.price}
                            rating = {i.rating}
                            />
                        ))}
                    </div>    
                )}
            </div>

            {basket?.length > 0 && (
                <Subtotal/>
            )}
        </div>
    )
}

export default Checkout
