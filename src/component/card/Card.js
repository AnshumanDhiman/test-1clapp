import React from 'react'
import './Card.css'
const Card = (props) => {
    console.log(props)
    return (
        <>
        <div className="card-custom">
            <div className = "header" style = {{backgroundImage : `url(${props.imageUrl})`}}>
                {props.working ? null:<div className = "overlay-list"><h4>Coming Soon</h4></div>}
            </div>
            <div className = "card-body-custom">
                {props.text}
            </div>
        </div>
        </>
    )
}

export default Card;
