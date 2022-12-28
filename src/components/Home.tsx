import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC  = () => {
    return (
        <>
        ola
            <Link to="tplink">TP-Link</Link>
            <Link to="intelbras">INTELBRAS</Link>
        </>
    )
}
export default Home;