import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      {/* // Map la note pour donner lui donner les props id, texte et date */}
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
