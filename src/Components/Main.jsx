import { useState } from "react";

export default function Main(){
  const[nome, setNome] = useState("") //(0) number  // (true) boolean
  const[numero, setNumero] = useState(0) //(0) number  // (true) boolean
  const[listaContatos, setListaContatos] = useState([])

  const registrar = (event) => {
    event.preventDefault();
    setListaContatos([...listaContatos, 
    {
      nomeSalvo: nome,
      telefoneSalvo: numero,
    }
    ]);
  };
    console.table(listaContatos)
    return(
      <main>

        <form action="" onSubmit={registrar}>
        
         <div id="fundoInput" className="classic">
          <label htmlFor="nome"> Nome:  </label>
            <input
            type="text"
            name="nome-contato" 
            id="nome"
            value={nome}
            onChange={(event)=> setNome(event.target.value)}
            />
            {nome}
         
         
          <label htmlFor="telefone"> Telefone:</label>
            <input
            type="tel"
            name="telefone-contato" 
            id="telefone"
            value={numero}
            onChange={(event)=> setNumero(event.target.value)}
            />
            {numero}
            <button>Enviar</button>

         </div>
          
        </form>

        
      </main>
    );
}