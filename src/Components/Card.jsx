import React from "react";
import Cardstyles from "../styles/Card.module.css";

const Card = ({mensaje}) => {
    return <div className={Cardstyles.card}>
        Hola, {mensaje}.
    </div>
};

export default Card;