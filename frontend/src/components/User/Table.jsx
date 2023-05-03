import { BiPencil, BiUserMinus } from "react-icons/bi"

function Table({ listUsers, load, remove }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="actions">
                <button>
                  <BiPencil onClick={() => load(user)} />
                </button>

                <button>
                  <BiUserMinus onClick={() => remove(user)} />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table