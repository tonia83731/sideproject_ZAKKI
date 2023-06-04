import { UnorderedList } from "../RepeatComponent/Repeat"

import {Link} from 'react-router-dom'

import {ReactComponent as HeaderLogo} from '../Assets/logo/logo main.svg'
import {ReactComponent as Hamburger} from '../Assets/svg/Hamburger.svg'

const headerData = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Programs",
  },
  {
    id: 3,
    name: "Events",
  },
  {
    id: 4,
    name: "Join Us",
  },
]

// export function UnorderedList({className, data}){
//   const listItems = data.map((item) => {
//     return(
//       <li className={`${className}-item`} key={item.id}>
//         <a href={item.herf} className={`${className}-link`}>{item.name}</a>
//       </li>
//     )
//   })
  
//   return(
//     <ul className={`${className}-list`}>
//       {listItems}
//     </ul>
//   )
// }

export default function Header(){
  return(
    <header className="site-header">
      <div className="header-container">
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label className="nav-toggle-label" for="nav-toggle">
          <Hamburger/>
        </label>
        <div className="header-logo-container">
          <HeaderLogo/>
        </div>
        <nav>
          {/* <UnorderedList className="nav" data={headerData}/> */}
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/programs" className="nav-link">Program</a>
              {/* <Link to="programs">Programs</Link> */}
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link">Events</a>
              {/* <Link to="events">Events</Link> */}
            </li>
            <li className="nav-item">
              <a href="/joinus" className="nav-link">Join Us</a>
              {/* <Link to="joinus">Join Us</Link> */}
            </li>
          </ul>
        </nav>
        <select name="language" id="nav-select" className="nav-select">
          <option value="ENG" class="nav-option" selected>ENG</option>
          <option value="INA" class="nav-option" disabled>INA</option>
        </select>
      </div>
    </header>
  )
}