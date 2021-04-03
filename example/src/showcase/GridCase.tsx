import { Grid } from 'hiska-react-cc'

export const GridCase = () => {
    return (
        <div>

            <Grid colsMd={[2, 4, 2, 4, 2, 4, 2, 4, 2, 10, 2, 10]} size="sm">
                <label>Nombre</label>
                <input />
                <label>Apellido</label>
                <input />
                <label>Edad</label>
                <input />
                <label>Genero</label>
                <select />
                <label>Direccion</label>
                <textarea />
                <label>Calle</label>
                <textarea />
            </Grid>
            <hr />
            <Grid colsMd={[2, 4, 2, 4, 2, 10, 2, 10]} size="sm">
                <label className="text-right">Hola: </label>
                <input />
                <label>Hola: </label>
                <input />

                <label>Hola</label>
                <textarea>
                    Otro contenido------sss
                    sdfasdf
                    dasfasdf
                </textarea>
                <label>Hola</label>
                <input />
                <label>Hola</label>
                <select>
                    <option>................</option>
                </select>
                <label>Hola</label>
                <input />
            </Grid>
        </div>
    )
}
