export default function CrearContrasena({nombreUsuario}) {
    

    return (
        <>
            <form>
                <label>{nombreUsuario}, escriba su nueva contraseña: </label>
                <input type="password" name="contra" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}