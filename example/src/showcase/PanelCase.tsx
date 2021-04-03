import React from 'react'
import { Icon, Panel } from 'hiska-react-cc'

export const PanelCase = () => {
    return (
        <div className="row">

            <Panel title="aaaa" color="danger" style={{ width: 400 }}>
                <header className="text-white">Error 1</header>
                <main>
                    Hola......
                </main>
                <main>
                    <title>Formulario demo</title>
                    Hola......
                </main>
                <footer>
                    footer
                </footer>
            </Panel>
            <Panel color="primary" style={{ width: 400 }}>
                <header className="text-white">
                    <Icon name="check" />
                    Formulario 1
                </header>
                <main>
                    <p>Hola......</p>
                    <a href='#/'>Card link</a>
                    <a href='#/'>Another link</a>
                </main>
                <main>
                    Hola......
                </main>
            </Panel>
        </div>
    )
}
