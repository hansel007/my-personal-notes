import NoteItem from './NoteItem';

function NoteList({ notes = [], onArchive, onDelete }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? <p className="note-list__empty">Tidak ada catatan.</p> : notes.map((note) => <NoteItem key={note.id} id={note.id} archived={false} onArchive={onArchive} onDelete={onDelete} {...note} />)}
    </div>
  );
}

export default NoteList;
