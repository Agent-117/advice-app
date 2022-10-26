import axios from "axios";
import Button from "./Button";
import Desktopdiv from "./Desktopdiv";
import Mobliediv from "./Mobliediv";
import { useState } from "react";


function App() {
  const [text, setText] = useState("Welcome! Get free advice");
  const [id, setid] = useState("");
  const hand = () => {axios.get("https://api.adviceslip.com/advice")
    .then((res)=>{
      setText(`"${res.data.slip.advice}"`);
      setid(res.data.slip.id)
    })
    .catch( err => console.log(err.message));
  };
  
  return (
    <div className="App">
      <h1>Advice #{id}</h1>
      <p>{text}</p>
      <Desktopdiv />
      <Mobliediv />
      <Button hand={hand}/>
    </div>
  );
}

export default App;
