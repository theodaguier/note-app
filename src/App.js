import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: '',
      date: '',
    },
  ]);

  // Entrer le text de l'utilisateur, la fonction sera transmise à ses enfants
  // Puis implémenter une nouvelle note

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // Dupliquer le tableau de note et ajouter la nouvelle note au tableau de note déjà existant
    const newNotes = [...notes, newNote];
    // Appel a la fonction "setNotes" et mettre à jour l'état
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
