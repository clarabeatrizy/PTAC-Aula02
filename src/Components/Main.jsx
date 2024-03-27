import { useState}  from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone,setTelefone] = useState(0)
     const [listaContatos,seListaContatos] = useState ([]);

 const registrar = (event) =>
 event.preventDefault();
  {
  alert("React.js");

   setListaContatos([...listaContatos,
    {
     nomeSalvo:nome,
     telefoneSalvo:telefone

    }
   ]);

   
   console.table(listaContatos);


   
 };

    return (
      <main>
      <form action="" onSubmit={registrar} >
       <label htmlFor="nome">Nome:</label>

        <input
           type="text"
           nome="nome-contato"
           id="nome"
           volue={ nome}
           onChange={
               (event)=> setNome( event.target.value)

           }
            />
            {nome}

</form>
      </main>
    );
    }
