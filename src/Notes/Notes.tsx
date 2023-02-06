import { useState, useEffect, useId } from "react";
import Note from "./Note"
import CreateNote from "./CreateNote";



function Notes() {
    const [notes, setNotes] = useState<any[]>([])
    const [inputText, setInputText] = useState("")

    // text store in state
    const textHandler = (e:HTMLInputElement) => {
        setInputText(e.target.value);
    }

    // adds new note to array state
    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: useId(),
                text: inputText,
            },
        ]);
        setInputText("");
    };


    return (
        <div className="">
            <Note />
            <Note />
            <Note />
            <CreateNote />
        </div>
    )
}

export default Notes;