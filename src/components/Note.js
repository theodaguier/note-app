import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { BsChevronDown } from 'react-icons/bs';
import Draggable from 'react-draggable';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <Draggable>
      <div className="note">
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
