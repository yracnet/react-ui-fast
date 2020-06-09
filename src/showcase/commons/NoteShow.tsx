import React from "react";

import { Note } from '../../module';

const NoteShow: React.FC = () => {
    return <div>
        <Note type="note-a" message="Hola Mundo....." />
        <Note type="note-input" message="Hola Mundo....." />


    </div>;
}

export default NoteShow;