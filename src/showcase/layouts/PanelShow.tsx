import React from 'react';
import { Panel } from '../../module';

const PanelShow: React.FC = () => {
    return <div>
        <Panel>
            <header>Cabecera</header>
            Contenido....
        <footer>Pie de pagina</footer>
        </Panel>
        <Panel mode="panel">
            <header>Cabecera</header>
            Contenido....
                <footer>Pie de pagina</footer>
        </Panel>
    </div>;
}

export default PanelShow;