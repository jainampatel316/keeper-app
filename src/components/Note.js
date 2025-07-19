import React, { useState } from "react";

const Note = ({ title, content, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editNote, setEditNote] = useState({ title, content });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editNote);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              className="form-control mb-2"
              name="title"
              value={editNote.title}
              onChange={handleChange}
            />
            <textarea
              className="form-control mb-2"
              name="content"
              value={editNote.content}
              onChange={handleChange}
              rows={3}
            />
            <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
