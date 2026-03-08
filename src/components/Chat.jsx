import datos from "./data.json";
import { useState, useEffect } from "react";
import EntradaUsuario from "./EntradaUsuario";

export default function Chat() {
    const [opcionUsuario, setOpcionUsuario] = useState("");
    const [formEnviado, setFormEnviado] = useState(false);
    
    // useState para el contador (evitamos que se borre en cada actualización)
    const [count, setCount] = useState(0);
    // useState para saber si esta contando
    const [estaPensando, setEstaPensando] = useState(false);

    const estadoBot1 = "R2-D2 está pensando...";
    const estadoBot2 = "R2-D2 está esperando";

    // Uso del useEffect para un temporizador
    useEffect(() => {
        let timer;
        if (estaPensando && count < 5) {
            timer = setTimeout(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000); 
        } else if (count >= 5) {
            setEstaPensando(false); 
        }
    }); 

    const enviarFormulario = (e) => {
        e.preventDefault();
        
        const botonPresionado = e.nativeEvent.submitter;
        setOpcionUsuario(botonPresionado.name);
        setFormEnviado(true);
        
        // Ponemos el contador a 0 y le ponemos a pensar
        setCount(0);
        setEstaPensando(true);
    };

    return (
        <main>
            <form onSubmit={enviarFormulario}>
                {datos.map((respuesta, indice) => (
                    <section key={indice}>
                        <button name={respuesta.usuario}>{respuesta.usuario}</button>
                    </section>
                ))}
            </form>
            
            {formEnviado && count === 5 &&<EntradaUsuario opcion={opcionUsuario} />}

            <hr />
            
            {/* 4. Lógica visual de los estados */}
            <div>
                {estaPensando ? (
                    <p><strong>{estadoBot1}</strong> (Progreso: {count}/5)</p>
                ) : (
                    <p><strong>{estadoBot2}</strong></p>
                )}
            </div>
        </main>
    );
}