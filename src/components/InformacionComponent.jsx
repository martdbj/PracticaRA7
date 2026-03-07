import datos from "./data.json";


export default function Informacion() {

    let preguntaRespuesta = JSON.parse(JSON.stringify(datos), (key, value) => {
        
        // Si encontramos la etiqutea fecha le adjuntamos la
        if (key === "fecha") return `${new Date()}`;
        return value;
    });

    return (
        <main>
            {preguntaRespuesta.map((respuesta, indice) => (
                <section>
                    <p>Usuario: {respuesta.usuario}</p>
                    {/* Comprobamos sí la etiqueta fecha es null*/}
                    {respuesta.fecha != null ? (
                        // Si no es null respondemos con la fecha
                        <p>R2-D2: {respuesta.fecha}</p>
                    ) : (
                        // Si es null respondemos con la respuesta normal
                        <p>R2-D2: {respuesta.asistente}</p>
                    )}
                </section>
            ))}
        </main>
    );
}
