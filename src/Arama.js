import React from "react";

const Arama = (props) => {
    const {arama,aramaHandler} = props;
    return (
        <input type="date" value= {arama} onChange={aramaHandler}/>
    )
}

export default Arama;