import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../Home"
import UserCrud from "../User/UserCrud"

function Router(props) {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/users" element={<UserCrud />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    )
}

export default Router