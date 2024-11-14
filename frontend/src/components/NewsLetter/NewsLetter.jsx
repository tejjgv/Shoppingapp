import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
   <div className="newsletter">
    <h1>Get Exclusive Offers on Your Email</h1>
    <p1>Subscribe and stay updated</p1>
    <div>
        <input type="email" placeholder='your email'/>
        <button>Subscribe</button>
    </div>
   </div>
  )
}

export default NewsLetter