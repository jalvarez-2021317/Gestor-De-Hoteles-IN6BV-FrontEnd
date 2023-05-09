

export const PerfilUsuario = () => {
    return (
        <>

            <div className="contenedor">
                <h1>Perfil de usuario</h1>
                <form method="POST" action="http://www.informaticasaladillo.es/mostrar.php" id="formulario">

                    <ul>

                        <li className="fila">

                            <input type="text" id="nombre" name="fullname" maxlength="30" size="30" placeholder="(nombre)"
                                required="required" autofocus="autofocus" />
                            <label for="nombre" className="propiedad">Nombre</label>

                            <input type="hidden" id="codigo" name="code" value="25" />
                        </li>

                        <li className="fila">
                            <input type="password" id="password" name="password" size="30" placeholder="(contraseña)"
                                required="required" />
                            <label for="password" className="propiedad">Contraseña</label>
                        </li>

                        <li className="fila">
                            <input type="email" id="email" name="email" maxlength="30" size="30" placeholder="(email)" />
                            <label for="email" className="propiedad">Email</label>
                        </li>

                        <li className="fila">
                            <input type="tel" id="telefono" name="phonenumber" maxlength="8" size="6" placeholder="(teléfono)"
                                pattern="[0-8]{8}" />
                            <label for="telefono" className="propiedad">Teléfono</label>
                        </li>

                        <li className="fila">
                            <input type="date" id="fecha" name="birthdate" />
                            <label for="fecha" className="propiedad">Fecha de reservación</label>
                        </li>

                        <li className="fila">
                            <input type="checkbox" id="premium" name="premium" checked="checked" />
                            <label for="premium" className="propiedad">Usuario Premium</label>
                        </li>

                        <li className="fila">
                            <input type="radio" id="hombre" name="genre" value="hombre" />
                            <label for="hombre" className="de-radio">Hombre</label>
                            <input type="radio" id="mujer" name="genre" value="mujer" checked="checked" />
                            <label for="mujer" className="de-radio">Mujer</label>
                            <label for="genero" className="propiedad">Género</label>
                        </li>

                        <li className="fila">
                            <select id="estudios" name="studies" required="required">
                                <option value="">- Seleccione -</option>
                                <option value="eso">Guatemala</option>
                                <option value="bachillerato">México</option>
                                <option value="cfgm">Perú</option>
                                <option value="cfgs">Colombia</option>
                                <option value="grado">Ecuador</option>
                                <option value="master">el Salvador</option>
                            </select>
                            <label for="estudios" className="propiedad">Lugar de origen</label>
                        </li>

                        <li className="fila">
                            <select id="idiomas" name="languages" size="4" multiple="multiple" required="required">
                                <option value="spanish">Español</option>
                                <option value="english">Inglés</option>
                                <option value="french">Francés</option>
                                <option value="german">Alemán</option>
                            </select>
                            <label for="idiomas" className="propiedad">Idiomas</label>
                        </li>

                        <li className="fila botonera">
                            <button type="submit">Aceptar</button>
                            <button type="reset">Reiniciar</button>
                        </li>

                    </ul>

                </form>
            </div>

        </>
    )
}