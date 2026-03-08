import datos from "./data.json";
export default function EntradaUsuario({opcion}) {

    const preguntaRespuesta = JSON.parse(JSON.stringify(datos), (key, value) => {
        
        // Si encontramos la etiqutea fecha le adjuntamos la fecha actual
        if (key === "fecha") return `${new Date()}`;
        return value;
    });
    
    return (
        <>
            {/* Lo que hacemos aquí es recoger la opción del usuario con un prop y mostrar la respuesta adecuada */}
            {preguntaRespuesta.map((respuesta, indice) => {
                if (respuesta.usuario === opcion) {
                    return (
                        <section> 
                            { respuesta.fecha != null ? (
                                <p>R2-D2: {respuesta.fecha}</p>
                            ) : (
                                <p>R2-D2: {respuesta.asistente}</p>
                            ) }
                        </section>
                    );
                }
                return null;
            })}
        </>
    );
}