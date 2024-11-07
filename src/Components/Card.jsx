import "./../styles/Card.css";

const Card = ({ data }) => {
    return (
    <div className="card">
        <h2>Informacion de tu mascota:</h2>
        <p>Nombre de la mascota: {data.input1}</p>
        <p>Comida favorita: {data.input2}</p> 
        <p>Juguete favorito: {data.input3}</p>
    </div>
);
};

export default Card;