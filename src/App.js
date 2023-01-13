import MyRoute from "./routes";
import { Link } from "react-router-dom";
import './App.css';

export default function App () {
  return (
    <>
      <div className="menu">
        Menu lateral:
        <Link to="/tplink" className="link">TP-Link</Link>
        <Link to="/intelbras" className="link">INTELBRAS</Link>
      </div>
      <MyRoute />
    </>
  )
}