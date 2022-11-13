import React from "react";

function Button (props) {
const esOperator = valor => {
    return isNaN(valor) && (valor  != ".") && (valor != "=") 
}
    return (
        <div className={`container-button ${esOperator(props.children) ? "operator" : ""}`.trimEnd()} onClick= {()=> props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}
export default Button;