import "./index.css"

function Header(props) {
  return (
    <header>
      <div>
      <h1>
          <props.icon />
          <span>{props.titlePage}</span>
        </h1>
      </div>
    </header>
  )
}

export default Header