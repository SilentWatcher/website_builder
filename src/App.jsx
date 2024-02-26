
import Navbar from './component/Navbar'
import Header from './component/Header'
import Footer from './component/Footer'
import Builder from './component/Builder'
import RelatedDeals from './component/RelatedDeals'

import './style/main.css'

function App() {

  const outerDiv = <div className="outer-div">
    <span>9.9  Building Responsive</span>
    <span>8.9 Cool</span>
    <span>8.9 Dcocs</span>
    
    <p style={{fontWeight:'500', marginTop:'1rem'}}>Why we love it </p>
    <p><i style={{color:'#1B88F4'}}>✔ </i> &nbsp; Documentation</p>
    <p><i style={{color:'#1B88F4'}}>✔ </i> &nbsp; Easy To Use</p>
    <p><i style={{color:'#1B88F4'}}>✔ </i> &nbsp; Out Of Box</p>
  </div>;
  return (
    <>  
     
      <Navbar/>
    
      <Header/>
      
      <Builder
        build_img_text='Builder 1'
        textTitle='SiteCraft 68-Inch Ultimate Web Design Studio-'
        textInfo='Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)'
        MainHighLight='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'
        ratingNo={9.8}
        ratingStar={`⭐⭐⭐⭐⭐`}
        remark='Exceptional'
        best_choice={true}
      />
      <Builder
        build_img_text='Biulder'
        textTitle='WixPro 72-Inch Responsive Website Builder- '
        textInfo='Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'
        MainHighLight='[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
        ratingNo={9.5}
        ratingStar={`⭐⭐⭐⭐⭐`}
        remark='Excellent'
        best_value={true}
        
      />
      <Builder
        build_img_text='Biulder 1'
        textTitle='SiteCraft 68-Inch Ultimate Web Design Studio-'
        textInfo=' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)'
        MainHighLight='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'
        ratingNo={9.3}
        ratingStar={`⭐⭐⭐⭐⭐`}
        remark='Excellent'
        // best_value={true}
        
      />
      <Builder
        build_img_text='Biulder 1'
        textTitle='CDK Resposive Builder: '
        textInfo='An extensive library of widgets and apps, and detailed step-by-step guides'
        discount='26% Off'
        MainHighLight={outerDiv}
        ratingNo={9.1}
        ratingStar={`⭐⭐⭐⭐ ☆`}
        remark='Very Good'
        // best_value={true}
        
      />
    {/* RELATED DEALS  */}
      <section className='related_deals_parent' style={{display:'flex', justifyContent:'center',gap:'1rem', flexWrap:'wrap',}}>
          <RelatedDeals/>
          <RelatedDeals/>
          <RelatedDeals/>
      </section>


      <Footer/>
    </>
  )
}

export default App
