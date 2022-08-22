import { useState } from 'react';
import Note from './Note';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {/* // Map la note pour donner lui donner les props id, texte et date */}
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
