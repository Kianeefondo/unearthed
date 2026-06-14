import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [gift, setGift] = useState({id: 0, name: "", pricePoint: "", audience: "", image: ""})

    useEffect(() => {
        setGift({id: props.id, name: props.name, pricePoint: props.pricePoint, audience: props.audience, image: props.image});
    }, [props.id, props.name, props.pricePoint, props.audience, props.image]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${gift.image})`}}></div>
            <div className='bottom-container'>
                <h3>{gift.name}</h3>
                <p>{'Price: ' + gift.pricePoint}</p>
                <p>{'Great For: ' + gift.audience}</p>
                <Link to={'/gift/' + gift.id}>Read More →</Link>
            </div>
        </div>
    )
}

export default Card