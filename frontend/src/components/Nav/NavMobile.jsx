import { 
  AiOutlineQq, AiFillHome, AiOutlineUsergroupAdd
} from "react-icons/ai"
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="navbarMobile">
      <div className="brand">
        <Link to="/">
          <AiOutlineQq />
          <span>Simple React CRUD</span>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <AiOutlineUsergroupAdd />
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation