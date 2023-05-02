import "./index.css"

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div>
        <p>Todos os direitos reservados &copy; {year}</p>
      </div>
    </footer>
  )
}

export default Footer