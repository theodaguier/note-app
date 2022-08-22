import { GrClose } from 'react-icons/gr';

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-data">
        <span className="date">{date}</span>
        <GrClose className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
