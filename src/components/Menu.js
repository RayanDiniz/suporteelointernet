import { Link } from "react-router-dom"
const Menu = () => {
  return(
    <>
      <ul className="menu">
        <li><Link to="/tplink" className="link-menu">TP-Link</Link></li>
        <li><Link to="/intelbras" className="link-menu">INTELBRAS</Link></li>
      </ul>
    </>
  )
}
export default Menu