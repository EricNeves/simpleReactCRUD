import "./index.css"

import { 
  AiOutlineQq, AiFillHome, AiOutlineUsergroupAdd
} from "react-icons/ai"

function Navigation() {
  return (
    <div className="navbar">
      <div className="brand">
        <a href="/">
          <AiOutlineQq />
          <span>Simple React CRUD</span>
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">
              <AiFillHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <AiOutlineUsergroupAdd />
              <span>Users</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation