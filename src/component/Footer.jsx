import React from 'react'
import '../style/footer.css'
function Footer() {
  return (
    <div>
        <footer className='footer'>
            <ul>
                <h4>Categories</h4>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
            </ul>
            <ul>
                <h4>Contact</h4>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
            <div id="country_select">
            <select name="country" id="country">
                <option value="volvo">United States</option>
                <option value="saab">India</option>
                <option value="opel">Russia</option>
                <option value="audi">Africs</option>
            </select>
            </div>

        </footer>
    </div>
  )
}

export default Footer