import React from "react";
import Nav from "./Nav";
import Photo from"./ClassBasedComponent/picture.jpg"

const App=()=>{
    return(
        <>
        <Nav data="Photo"/>
        <img src={Photo} alt="test" />
        </>
    )
}
export default App;