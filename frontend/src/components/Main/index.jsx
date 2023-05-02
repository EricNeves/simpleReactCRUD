import "./index.css"

import Header from "../Header"

import { AiFillHome } from "react-icons/ai"

function Main() {
  return (
    <>
      <Header titlePage="Inicio" icon={AiFillHome} />
      <main>
        <div>
          <h1>Welcome to the Application!</h1>
          <p>
            <span>System to exemplify the creation of a CRUD with ReactJS 🚀</span>
          </p>

          <h2>Developed by 
            <a href="https://github.com/ericneves" target="_blank">
              @ericneves
            </a> 👾
          </h2>
        </div>
      </main>
    </>
  )
}

export default Main