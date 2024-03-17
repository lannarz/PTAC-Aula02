import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[numero, setNumero] = useState(0) //(0) number  // (true) boolean

    return(
      <main>

        <form>

        <div id="fundoInput" className="classic">
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
            type="tel"
            name="" id=""
            onChange={(event)=> setNumero(event.target.value)}
            />
            {numero}
            <button>Enviar</button>
        </label>
        </div>
          
        </form>

        
      </main>
    );
}