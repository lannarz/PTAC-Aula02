import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[numero, setNumero] = useState(0) //(0) number  // (true) boolean

    return(
      <main>

        <div id="fundoInput">
        <label> Nome: 
            <input
            type="text"
            name="" id=""
            onChange={(event)=> setNome(event.target.value)}
            />
            {nome}
        </label>
         

        <label> Telefone:
            <input
            type="text"
            name="" id=""
            onChange={(event)=> setNumero(event.target.value)}
            />
            {numero}
            <button>Enviar</button>
        </label>
       
       



        </div>
       
      </main>
    );
}