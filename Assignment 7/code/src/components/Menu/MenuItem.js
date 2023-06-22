import React from 'react'
// import veg from '../assets/veg.png'
import veg from '../../assets/veg.png'
import nonveg from '../../assets/nonveg.png'
export default function MenuItem({icon,title,price,description,imgid}) {
  return (
    <div>
       <div className='Menuitem-container'>
      <div className='item-text-container'>
        <p>
          <img src={icon?veg:nonveg} style={{width:'15px',objectFit:'contain',height:'15px'}}></img>
        </p>
        <h3 className='item-title'>{title}</h3>
        <p className='item-price'>₹{price/100}</p>
        <p className='item-description'>{description}</p>
      </div>
      <div>
        <div>
          <button className='item-button'>
{imgid&&<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imgid}`} alt="foodimage" />}
             
            </button>
          
          <div className='add-button'>
            <div>+</div>
            <div>Add</div>
            <div>-</div>
          </div>
        </div>
        
      </div>
      
    </div>
      <div className="item-separator"/>
    </div>
   
  )
}
