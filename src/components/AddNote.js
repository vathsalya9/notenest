import { useState } from "react";

const AddNote = ({ handleAddNote, selectedColor }) => {
    const [noteText, setNoteText] = useState('');
    const limit = 300;

    const handleChange = (event) => {
        if(limit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleSave = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };
    
    return (
        <div className="newnote" style={{ backgroundColor: selectedColor }}>
            <textarea 
            rows="8" 
            cols="10" 
            placeholder="Type to add a new note..."
            value={noteText}
            onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{limit - noteText.length} remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
