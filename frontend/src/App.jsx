import "./App.css"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Router from "./components/Main/Router"

import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App