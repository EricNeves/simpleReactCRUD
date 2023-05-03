import "./index.css"
import { useState, useEffect } from "react"
import { AiOutlineUngroup } from "react-icons/ai"
import axios from "axios"

import Header from "../Header"
import Main from "../Main"
import Form from "./Form"
import Table from "./Table"


function Home() {
  const [data, setData] = useState({
    username: "",
    email: ""
  })
  const [listUsers, setListUsers] = useState([])

  const baseURL = "http://localhost:3030/users"

  const clear = () => setData({ username: "", email: "" })

  const save = () => {
    const method = data.id ? "put" : "post"
    const url = data.id ? `${baseURL}/${data.id}` : baseURL

    axios[method](url, data)
      .then(res => {
        const list = updatedList(res.data)
        setListUsers(list)
      })
  }

  const remove = user => {
    axios.delete(`${baseURL}/${user.id}`)
      .then(res => {
        const list = updatedList(user, false)
        setListUsers(list)
      })
  }

  const load = user => {
    setData(user)
  }

  const updateField = event => {
    setData(old => {
      return {
        ...old,
        [event.target.name]: event.target.value
      }
    })
  }

  const updatedList = (user, add = true) => {
    const list = listUsers.filter(u => u.id !== user.id)
    if (add) list.unshift(user)
    return list
  }

  useEffect(() => {
    axios.get(baseURL).then(res => setListUsers(res.data))
  }, [listUsers])

  return (
    <>
      <Header titlePage="Users" icon={AiOutlineUngroup} />
      <Main>
        <div className="crudContent">
          <h1>Manage Users</h1>

          <Form 
            updateField={updateField} data={data}
            save={save} clear={clear}
          />
          
          <Table
            listUsers={listUsers} load={load} remove={remove}
          />
        </div>
      </Main>
    </>
  )
}

export default Home