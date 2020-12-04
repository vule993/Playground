import React from 'react'
import './scoreBoard.css'

export default function ScoreBoard(props){
    const Winners = () => (
        <>
            {
                props.list.map((score, index) => {
                    return (
                        <div key={index}>{ score }</div>
                    )
                })
            }
        </>
    )
    return (
        <div id="rank">
            <h2>Winners</h2>
            <div id="winner-list">
                <Winners />
            </div>
        </div>
    )
}