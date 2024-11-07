import { useState } from "react";
import "./../styles/Form.css";

const Form = ({ setData }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input1.trim().length >= 3 && input1 === input1.trimStart() && input2.length >= 6
    ) {
      setError(false);
      setData({input1, input2, input3});
    } else {
      setError(true); 
      setData(null);
    }
  };

  return ( 
        <form  onSubmit={handleSubmit} className="form">
          <div>
            <label>Nombre de tú mascota</label>
            <input type="texto" placeholder="minimo 3 caracteres" value={input1} onChange={(e)=> setInput1(e.target.value)}/>
          </div>
          <div>
            <label>Comida favorita de tú mascota</label>
            <input type="texto" placeholder="minimo 6 caracteres" value={input2} onChange={(e)=> setInput2(e.target.value)}/>
          </div>
          <div>
            <label>Juguete favorito de tú mascota</label>
            <input type="texto" placeholder="" value={input3} onChange={(e)=> setInput3(e.target.value)}/>
            </div>
          <button type="submit">Enviar</button>
          {error && <p className="error">Por favor chequea que la información sea correcta</p>}
        </form>
  );
};


export default Form;
