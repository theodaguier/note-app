import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Bienvenue sur Notes, ecrivez dès maintenant votre première note !',
      date: '',
    },
  ]);

  const [search, setSearch] = useState('');

  // Récupérer les notes sauvegardées dans le localStorage

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Sauvegarder les notes dans le localStorage
  // La fonction sauvegarde les données après chaque note mise à jour

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  // Entrer le texte de l'utilisateur, la fonction sera transmise à ses enfants
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

  // Fonction pour supprimer une note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearch} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
