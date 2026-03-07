import { useState } from "react";
import CrearContrasena from "./CrearContrasena";

export default function InicioSesion() {
    // Usamos el useState para
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [usuarioEnviado, setUsuarioEnviado] = useState(false)

    const manejarEnvio = (e) => {
        e.preventDefault(); 
        
        const datos = new FormData(e.target);
        setNombreUsuario(datos.get("nombreUsuario"));

        setUsuarioEnviado(true);
    };

    // Renderización condicional
    if (usuarioEnviado) {
        return CrearContrasena({nombreUsuario})
    }

    return (
        <>
            <form onSubmit={manejarEnvio}>
                <label>Escriba el nombre: </label>
                <input type="text" name="nombreUsuario" />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}