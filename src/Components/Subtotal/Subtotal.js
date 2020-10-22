import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../StateManagement/StateProvider"

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    
    const getBasketTotal = (b) => {
        let total = 0;
        b.forEach(e => {
            total = total + e.price; 
        });
        console.log(total)
        return total
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText ={
                (value) => (
                <>
                    <p>Subtotal ({basket.length} artículos): <strong>{value}</strong></p>
                    
                    <small className="subtotal__gift">
                    <input type="checkbox"/> Esta orden tiene un regalo
                    </small>
                </>
                )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <span>
                <button>Proceder al pago</button>
            </span>
        </div>
    )
}

export default Subtotal
