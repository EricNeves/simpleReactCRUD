import { useState } from "react"
import "./index.css"
import { AiOutlineAlignRight } from "react-icons/ai"

import Nav from "../Nav/NavMobile"


function Header(props) {
  const [navMobileVisible, setNavMobileVisible] = useState(false)
  
  return (
    <>
      {navMobileVisible && <Nav />}
      <header>
        <div>
          <h1>
            <props.icon />
            <span>{props.titlePage}</span>
          </h1>
          <button id="bar" onClick={() => setNavMobileVisible(!navMobileVisible)}>
            <AiOutlineAlignRight />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header