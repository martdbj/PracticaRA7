import { useNavigate } from 'react-router-dom';

export default function CrearContrasena({nombreUsuario}) {
    
    const navigate = useNavigate();

        const contrasenaEnvio = (e) => {
            e.preventDefault();
            navigate("/about");
        };

    return (
        <>
            <form onSubmit={contrasenaEnvio}>
                <label>{nombreUsuario}, escriba su nueva contraseña: </label>
                <input type="password" name="contra" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}