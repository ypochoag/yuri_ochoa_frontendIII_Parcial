import { useState } from "react";
import Card from  "./Components/Card"
import Form from "./Components/Form";
import './App.css'

function App() {
  const [data, setData] = useState(null);

  return (  
      <div className="App">
        <h1>Ingresa la información de tú mascota</h1>
        <Form setData={setData} />
        {data && <Card data={data} />}
      </div>
  );
}

export default App;
