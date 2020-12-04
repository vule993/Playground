import React from 'react'
import './square.css'

export default function Square(props) {
    console.log('square is rendered')
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}