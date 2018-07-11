import React from "react";
import "./Title.css";

const Title = props => (
    <div className="title-section">
        <h1 className="title">{props.children}</h1>;
    </div>

)




export default Title;
