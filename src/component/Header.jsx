import React from 'react'
import '../style/header.css'


function Header() {
  return (
    <>
      <header className="header">
        <h1 className='heading'>Best Website builders in the US</h1>
        <div className="time_info">
            <div className='time_info_left'>
              <span className="material-symbols-outlined">check_circle</span>Last Updated- February 22, 2020 
              <span className="material-symbols-outlined">info</span>Advertising Disclosure
            </div>
            <div className='time_info_right'>
              Top Relevant <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
        <div className="tools_info">
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>        
        <div className="mininav">
          <span>Home</span> <span className="material-symbols-outlined">navigate_next</span>
          <span>Hosting for all</span><span className="material-symbols-outlined">navigate_next</span>
          <span>Hosting</span><span className="material-symbols-outlined">navigate_next</span>
          <span>Hosting6</span><span className="material-symbols-outlined">navigate_next</span>
          <span>Hosting5</span>
  
        </div>

      </header>
    </>
  )
}

export default Header