import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState(0);
  const [email, setEmail] = useState("");
  const [listaContatos, setListaContatos] = useState([]);

  const registrar = (event) => {
    event.preventDefault();
    setListaContatos([
      ...listaContatos,
      {
        nomeSalvo: nome,
        telefoneSalvo: numero,
        emailSalvo: email,
      },
    ]);
    setNome("");
    setNumero(0);
    setEmail("");
  };

  const deletar = (index) => {
    const updatedList = [...listaContatos];
    updatedList.splice(index, 1);
    setListaContatos(updatedList);
  };

  return (
    <main>
      <form action="" onSubmit={registrar} className="form-container">
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email-contato"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="enviar-btn">
          Enviar
        </button>
      </form>

      <div className="contatos-container">
        {listaContatos.map((contato, index) => (
          <div className="dadosSalvos" key={index}>
            <div className="dadosSalvos-info">
              <p><strong>Nome:</strong> {contato.nomeSalvo}</p>
              <p><strong>Telefone:</strong> {contato.telefoneSalvo}</p>
              <p><strong>Email:</strong> {contato.emailSalvo}</p>
            </div>
            <button onClick={() => deletar(index)} className="excluir-btn">Excluir</button>
          </div>
        ))}
      </div>
    </main>
  );
}
