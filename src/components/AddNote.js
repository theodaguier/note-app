import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [newNote, setNewNote] = useState('');
  const characterLimit = 200;

  // Mettre à jour l'état de "setNewNote" à chaque fois que l'utilisateur tape du texte
  const handleChange = (e) => {
    // Empecher d'ajouter plus de texte une fois la limite de charactère franchis
    if (characterLimit - e.target.value.length >= 0) {
      setNewNote(e.target.value);
    }
  };
  // Enregistrer une nouvelle note
  const handleClick = () => {
    // Empecher d'enregistrer une note vide
    if (newNote.trim().length > 0) {
      handleAddNote(newNote);
      setNewNote('');
    }
  };
  return (
    <div className="note new">
      <textarea
        placeholder="Écrire une nouvelle note..."
        id=""
        cols="10"
        rows="8"
        value={newNote}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <span>{characterLimit - newNote.length} remaining</span>
        <button className="save-note" onClick={handleClick}>
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default AddNote;
