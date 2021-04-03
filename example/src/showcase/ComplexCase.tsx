import React from 'react'
import { Feedback, FormItem, Grid, Icon, Panel } from 'hiska-react-cc'

export const ComplexCase = () => {
    return (
        <form className="needs-validation was-validated">
            <Grid colsMd={[6, 6]} colsSm={[12]}>
                <Panel color="primary">
                    <header className="text-white">
                        <Icon name="lock" className="mr-2" />
                    Autenticacion de Usuario
                    </header>
                    <main>
                        <Grid cols={[12]} size="sm">
                            <FormItem label="Correo" col={4}
                                className="m-2"
                                invalidFeedback={<Feedback type="error" message="Nombre requerido" size="sm" />}>
                                <Icon name="at" append />
                                <input required />
                            </FormItem>
                            <FormItem label="Contraseña" col={4} className="m-2">
                                <Icon name="lock" append />
                                <input />
                            </FormItem>
                        </Grid>
                    </main>
                    <main>
                        <button>
                            <Icon name="check" />
                        Login
                    </button>
                        <a href="#">
                            <Icon name="check" />
                            Register
                        </a>
                    </main>
                </Panel>
                <Panel color="info">
                    <main>
                        <title>
                            <Icon name="question" className="mr-2" />
                            Informacion de acceso
                        </title>
                        <p>Para acceder al sistema.....</p>
                        <Grid cols={[4, 8]}>
                            <label>Uno</label>
                            <input />
                            <label>Uno</label>
                            <input />
                            <label>Uno</label>
                            <input />
                        </Grid>
                        <br />
                        <br />
                        <br />
                    </main>
                </Panel>

            </Grid>

        </form>
    )
}
