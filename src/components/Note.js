import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';
import Draggable from 'react-draggable';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  return (
    <Draggable>
      <div className="note">
        <div className="note-header">
          <BsChevronDown
            className="hidden-icon"
            size="1.3em"
            onClick={() => setToggle()}
          />
        </div>
        <div className="note-data">
          <span>{text}</span>
          <GrClose
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
        <div className="note-footer">
          <span className="date">{date}</span>
        </div>
      </div>
    </Draggable>
  );
};

export default Note;
