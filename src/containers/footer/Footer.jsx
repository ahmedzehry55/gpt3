import React from 'react'
import "./footer.css"
import gpt3Logo from '../../assets/logo.svg';
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p><a>Request Early Access</a></p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a>Overons</a></p>
          <p><a>Social Media</a></p>
          <p><a>Counters</a></p>
          <p><a>Contact</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p><a>Terms & Conditions</a> </p>
          <p><a>Privacy Policy</a></p>
          <p><a>Contact</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p><a>Crechterwoord K12 182 DK Alknjkcb</a></p>
          <p><a>085-132567</a></p>
          <p><a>info@payme.net</a></p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer