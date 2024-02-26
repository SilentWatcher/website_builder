import React from 'react'
import '../style/related_deals.css'
import  delalImage from'../assets/builder.png'
function RelatedDeals() {
  return (
    <div className='related_deals_card'>
        <div className='img_container'>
            <img src={delalImage} alt="delalImage" />
        </div>
        <div className="deals_info">
            <p><span className='limited_offer'>20% &nbsp; Limited Time </span></p>
            <h3>Webbuilder 1</h3>
            <p>Computer  Modern clasic with wix support</p>
            <p className='pricing'>
                <span className='discount'>$39.96</span>
                <span className='original'>$49.96</span>
                <span className='off'>(20% Off)</span>
            </p>

            <button>View</button>
        </div>
    </div>
  )
}

export default RelatedDeals