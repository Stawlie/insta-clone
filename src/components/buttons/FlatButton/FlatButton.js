import React from "react";
import './styles.css'


function FlatButton(props){
    return (
        <button onClick={props.onClick} disabled={props.isDisabled} className={`flat-btn ${props.isDisabled ? 'flat-btn--disabled' : ''}`}>
            {props.text}
        </button>
    )
}

export default FlatButton
