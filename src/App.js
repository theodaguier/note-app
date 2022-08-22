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
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
