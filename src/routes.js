import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home"
import TpLink from "./pages/Tplink/TpLink"
import IntelBras from "./pages/Intelbras/Intelbras"

const MyRoute = () => {
  return (
    <Routes>
      <Route element={ <Home/> } path="/" exact />
      <Route element={ <TpLink/> } path="/tplink"/>
      <Route element={ <IntelBras/> } path="/intelbras"/>
    </Routes>
  )
}
export default MyRoute;