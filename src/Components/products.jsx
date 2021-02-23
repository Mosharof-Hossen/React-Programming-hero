import React from "react"
import "./product.style.css"

function Product(props){
    
    return(
        <div className = "container">
            <h1>{props.name}</h1>
            <h3>U$$-{props.price}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quia?</p>
            <div className = "button-container">
                <button className = "button">Buy now</button>
            </div>
        </div>
    )
}

export default Product