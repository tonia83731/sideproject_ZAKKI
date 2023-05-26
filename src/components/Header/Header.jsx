import { UnorderedList } from "../RepeatComponent/Repeat"

import {ReactComponent as HeaderLogo} from '../Assets/logo/logo main.svg'
import {ReactComponent as Hamburger} from '../Assets/svg/Hamburger.svg'

const headerData = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Projects",
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
          <UnorderedList className="nav" data={headerData}/>
        </nav>
        <select name="language" id="nav-select" className="nav-select">
          <option value="ENG" class="nav-option" selected>ENG</option>
          <option value="INA" class="nav-option">INA</option>
        </select>
      </div>
    </header>
  )
}