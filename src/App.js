import { useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Complete the data analysis report by end of day.",
      date: "08/08/2024",
      starred: false,
      color: '#ffdab9', // Light pink
    },
    {
      id: nanoid(),
      text: "Review the pull request for the new feature branch.",
      date: "08/08/2024",
      starred: false,
      color: '#add8e6', // Light coral
    },
    {
      id: nanoid(),
      text: "Attend team meeting to discuss project updates.",
      date: "08/09/2024",
      starred: false,
      color: '#98fb98', // Light peach
    },
    {
      id: nanoid(),
      text: "Prepare presentation slides for the upcoming conference.",
      date: "08/10/2024",
      starred: false,
      color: '#fffacd', // Light green
    },
    {
      id: nanoid(),
      text: "Schedule a code review session with the junior developers.",
      date: "08/11/2024",
      starred: false,
      color: '#ffb6c1', // Light blue
    }
  ]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showStarred, setShowStarred] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#DABFDE');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
      starred: false,
      color: selectedColor,
    };
    setNotes([...notes, newNote]);
    setShowAddNote(false);
  };

  const archiveNote = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    setNotes(notes.filter((note) => note.id !== id));
    setArchivedNotes([...archivedNotes, noteToArchive]);
  };

  const deleteNote = (id) => {
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    ));
  };

  const starNote = (id) => {
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, starred: !note.starred } : note
    ));
  };

  const handleStarredToggle = () => {
    setShowStarred(!showStarred);
    setShowArchived(false);
  };

  const handleArchiveToggle = () => {
    setShowArchived(!showArchived);
    setShowStarred(false);
  };

  const handleBack = () => {
    setShowStarred(false);
    setShowArchived(false);
  };

  const handleAddNoteClick = () => {
    setShowAddNote(!showAddNote);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='container'>
      <Header 
        onStarredToggle={handleStarredToggle}
        onBack={handleBack}
        showStarred={showStarred}
        showArchived={showArchived}
        onAddNoteClick={handleAddNoteClick}
        onColorSelect={handleColorSelect}
        selectedColor={selectedColor}
        onArchiveToggle={handleArchiveToggle}
      />
      <Search handleSearchNote={setSearchText} />
      <Notes 
        notes={showArchived ? archivedNotes : notes
          .filter(note => (showStarred ? note.starred : true) && note.text.toLowerCase().includes(searchText.toLowerCase()))} 
        handleAddNote={addNote} 
        handleArchiveNote={archiveNote}
        handleDeleteNote={deleteNote} 
        handleEditNote={editNote} 
        handleStarNote={starNote} 
        showAddNote={showAddNote}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default App;
