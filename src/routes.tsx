import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home"
import TpLink from "./components/TpLink"
import IntelBras from "./components/Intelbras"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route element={ <Home/> } path="/" />
      <Route element={ <TpLink/> } path="/tplink"/>
      <Route element={ <IntelBras/> } path="/intelbras"/>
    </BrowserRouter>
  )
}
export default Routes;