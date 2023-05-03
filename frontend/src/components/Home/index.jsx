import "./index.css"
import Header from "../Header"
import Main from "../Main"

import { AiFillHome } from "react-icons/ai"

function Home() {
  return (
    <>
      <Header titlePage="Home" icon={AiFillHome} />
      <Main>
          <div className="homeContent">
            <h1>Welcome to the Application!</h1>
            <p>
              <span>System to exemplify the creation of a CRUD with ReactJS 🚀</span>
            </p>

            <h2>Developed by
              <a href="https://github.com/ericneves" target="_blank" rel="noopener noreferrer">
                @ericneves
              </a> 👾
            </h2>
          </div>
      </Main>
    </>
  )
}

export default Home