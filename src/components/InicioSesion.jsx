import { useState} from "react";
import CrearContrasena from "./CrearContrasena";

export default function InicioSesion() {
    /*
    Usamos el useState para guardar el nombre de usuario (se usa en el Componente Crear Contraseña) y para 
    saber si el formulario se ha enviado
    */

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [usuarioEnviado, setUsuarioEnviado] = useState(false)

    const manejarEnvio = (e) => {
        e.preventDefault();

        const datos = new FormData(e.target);
        setNombreUsuario(datos.get("nombreUsuario"));

        setUsuarioEnviado(true);
    };

    return (
        <>
            {/* Renderización condicional */}
            {usuarioEnviado ? (
                // Uso de props en el componente CrearContraseñ
                <CrearContrasena nombreUsuario={nombreUsuario} />
            ) : (
                <form onSubmit={manejarEnvio}>
                    <label>Escriba el nombre: </label>
                    <input type="text" name="nombreUsuario" />

                    <button type="submit">Submit</button>
                </form>
            )
            }
        </>
    );
}