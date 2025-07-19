
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (idx) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== idx));
  };

  const editNote = (idx, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === idx ? updatedNote : note))
    );
  };

  return (
    <div className="container-fluid p-0 min-vh-100 d-flex flex-column" style={{paddingBottom: '60px'}}>
      <Header />
      <main className="container flex-grow-1" style={{maxWidth: 600}}>
        <CreateNote onAdd={addNote} />
        {notes.map((note, idx) => (
          <Note
            key={idx}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(idx)}
            onEdit={(updatedNote) => editNote(idx, updatedNote)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
