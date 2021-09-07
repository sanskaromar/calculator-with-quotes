import React from "react"

function Key(props) {
    return(
        <button className={`${props.className}`} onClick={() => props.onClick(props.keyValue)}>
            {props.keyValue}
        </button>
    )
}
export default Key