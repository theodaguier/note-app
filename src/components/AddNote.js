const AddNote = () => {
  return (
    <div className="new">
      <textarea
        placeholder="Écrire une nouvelle note..."
        id=""
        cols="10"
        rows="8"
      ></textarea>
      <div className="note-footer">
        <span>200 remaining</span>
      </div>
    </div>
  );
};

export default AddNote;
