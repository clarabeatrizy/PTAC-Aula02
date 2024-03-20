import { useState}  from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    
    return (
      <Main>
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


      </Main>
    );
    }
