import React from 'react'
import './Item.css'

const items = (props) => {
  return (
    <div className='item'>
        <img src={props.image} />
        <p>{props.name}</p>
        <div className="item-prices">
        <div className="item-price-new">
            {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
I
                </div>

        </div>

    </div>
  )
}

export default items