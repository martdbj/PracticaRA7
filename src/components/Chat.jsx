import datos from "./data.json";
import { useState } from "react";
import EntradaUsuario from "./EntradaUsuario";

export default function Chat() {

    const [opcionUsuario, setOpcionUsuario] = useState("");
    const [formEnviado, setFormEnviado] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();

        const datos = new FormData(e.target);

        const botonPresionado = e.nativeEvent.submitter;
        const nombreBoton = botonPresionado.name;

        setOpcionUsuario(nombreBoton);
        setFormEnviado(true);
        console.log("Nombre del campo:", nombreBoton);

    };

    let preguntaRespuesta = JSON.parse(JSON.stringify(datos), (key, value) => {

        // Si encontramos la etiqutea fecha le adjuntamos la fecha actual
        if (key === "fecha") return `${new Date()}`;
        return value;
    });

    return (
        <>
            {formEnviado ? (
                <main>
                    <form onSubmit={enviarFormulario}>
                        {preguntaRespuesta.map((respuesta, indice) => (
                            <section>
                                <button name={respuesta.usuario}>{respuesta.usuario}</button>
                            </section>
                        ))}
                    </form>
                    <EntradaUsuario opcion={opcionUsuario}></EntradaUsuario>
                </main>
            ) : (
                <main>
                    <form onSubmit={enviarFormulario}>
                        {preguntaRespuesta.map((respuesta, indice) => (
                            <section>
                                <button name={respuesta.usuario}>{respuesta.usuario}</button>
                            </section>
                        ))}
                    </form>
                </main>
            )}
        </>
    );
}

