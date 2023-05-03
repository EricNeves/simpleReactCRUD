function Form({ updateField, data, save, clear }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>Name</label>
      <input type="text" onChange={updateField}
        value={data.username} name="username" autoComplete="off" placeholder="Name" />

      <label>Email</label>
      <input type="email" onChange={updateField}
        value={data.email} name="email" autoComplete="off" placeholder="Email" />

      <div>
        <button onClick={save}>Save</button>
        <button onClick={clear}>Clear</button>
      </div>
    </form>
  )
}

export default Form