import { UnorderedList } from "../RepeatComponent/Repeat"

import {ReactComponent as Twitter} from '../Assets/svg/icons8-twitter-circled-50.svg'
import {ReactComponent as Facebook} from '../Assets/svg/icons8-facebook-50.svg'
import {ReactComponent as Instagram} from '../Assets/svg/icons8-instagram-circle-50.svg'
import {ReactComponent as FooterLogo} from '../Assets/logo/logo main white.svg'

const aboutUsData = [
  {id: 1, name: "Vision and Mission"}
]

const involvedData = [
  {
    id: 1,
    name: "Donate"
  },
  {
    id: 2,
    name: "Volunteer"
  },
  {
    id: 3,
    name: "Partner"
  },
]

const contactData = [
  {
    id: 1,
    name: "info@zakki.org",
    herf: "mailto:info@zakki.org"
  },
  {
    id: 2,
    name: "+62 819 9919 1498",
    herf: "tel:+6281999191498"
  }
]

const infoData = [
  {
    id: 1,
    name: "FAQ"
  },
  {
    id: 2,
    name: "Privacy Policy"
  },
  {
    id: 3,
    name: "Cookie Policy"
  },
  {
    id: 4,
    name: "Terms and Conditions"
  },
]


function FooterSection({title, data}){
  return (
    <section class="footer-section">
      <h3 class="section-title">{title}</h3>
      <UnorderedList className="footer" data={data}/>
    </section>
  )
}

function FooterFollowSection({title, data}){
  return (
    <section class="footer-section">
      <h3 class="section-title">{title}</h3>
      <div className="footer-group">
        <a href="" class="social-media-link">
          <Twitter/>
        </a>
        <a href="" class="social-media-link">
          <Facebook/>
        </a>
        <a href="" class="social-media-link">
          <Instagram/>
        </a>
      </div>
    </section>
  )
}



export default function Footer(){
  return(
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <FooterLogo/>
        </div>
        <FooterSection title="About Us" data={aboutUsData}/>
        <FooterSection title="Get Involved" data={involvedData}/>
        <div>
          <FooterSection title="Contact Us" data={contactData}/>
          <FooterFollowSection title="Follow Us"/>
        </div>
        <FooterSection title="More Info" data={infoData}/>
      </div>
    </footer>
  )
}