import React from 'react'
import BuilderImg from  '../assets/builder.png';
import '../style/Builder.css'


function Builder({build_img_text,textTitle,textInfo, MainHighLight, ratingNo, ratingStar, remark , best_choice,best_value , discount}) {
  return (
    
    <section className='builder'>
        {best_choice && <button className='best_choice'><span className="material-symbols-outlined">trophy</span>  &nbsp; Best Choice</button>}
        {best_value && <button className='best_value'> <span className="material-symbols-outlined">diamond</span>&nbsp; Best Value</button>}
        <div className="image">
            <img src={BuilderImg} alt="builder" />
            <p>{build_img_text}</p>
        </div>
        <div className="builder_info">
            <p><b>{textTitle}</b>{textInfo}</p>
            {discount && <span>26% Off</span>}
            <h4>Main Highlight</h4>
            <p className='mainHighLight'>{MainHighLight}</p>
            <span>Show more <span className="material-symbols-outlined">expand_more</span></span>
        </div>
        <div className="builder_rating">
            <div className="rating">
              <h1>{ratingNo}</h1>
              <span>{ratingStar}</span>
              <span>{remark}</span>
            </div>
            <button>View</button>
        </div>
    </section>
  )
}

export default Builder