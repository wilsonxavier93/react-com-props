import { useState } from "react";

const ContadorClick = () =>{

    const [contador, setContador] = useState(10);

    const contar = () =>{
        setContador(contador + 1);
    }

    return(
        <div>
            <h2> meu valor atual é: (contador)</h2>
            <button onClick={contar}>Clique aqui para somar mais 1</button>
        </div>
    );
}

export default ContadorClick;