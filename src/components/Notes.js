import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, handleStarNote, showAddNote, selectedColor, handleChangeColor, handleArchiveNote }) => {
    return (
        <div className="notes">
            {notes.map((note, index) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    starred={note.starred}
                    handleDeleteNote={handleDeleteNote}
                    handleEditNote={handleEditNote}
                    handleStarNote={handleStarNote}
                    color={note.color}
                    handleChangeColor={handleChangeColor}
                    index={index}
                    handleArchiveNote={handleArchiveNote} // Pass the archive handler
                />
            ))}
            {showAddNote && (
                <AddNote 
                    handleAddNote={handleAddNote} 
                    selectedColor={selectedColor} 
                />
            )}
        </div>
    );
};

export default Notes;
