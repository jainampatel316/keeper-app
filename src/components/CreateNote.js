import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);
      return;
    }
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="mb-4">
      {alert && (
        <div className="alert alert-danger" role="alert">
          Please fill in both fields!
        </div>
      )}
      <form onSubmit={submitNote}>
        <input
          className="form-control mb-2"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-2"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <button className="btn btn-success w-100" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
