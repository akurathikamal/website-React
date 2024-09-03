import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook ,faTwitter,faInstagram, faXTwitter,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-item f-logo">
           <h1 className='foot-head'> TN Tourism</h1>
        </div>
        <div className="footer-item f-social">
        <FontAwesomeIcon icon={faFacebook} className='iconf icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className='iconi icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faXTwitter} className='icont icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube} className='icony icon'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin} className='iconl icon'></FontAwesomeIcon>
          
        </div>
        <div className="footer-item f-contact">
            <p>Contact us: Batch-2@gmail.com</p>
            <p> Tollfree:+91 72082110</p>
           <p> All rights reserved © 2024 Batch-2. Copyright | Terms of Use | Cookie Policy | Contact Us</p>
        </div>
    </footer>
    )
}