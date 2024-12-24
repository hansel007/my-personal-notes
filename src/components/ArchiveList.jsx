import React from 'react';
import NoteItem from './NoteItem';

function ArchiveList({ notes = [], onUnarchive, onDelete }) {
  return (
    <div className="archive-list">
      {notes.length > 0 ? (
        notes.map((note) => <NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} archived={note.archived} onArchive={onUnarchive} onDelete={onDelete} />)
      ) : (
        <p className="empty-list">Tidak ada catatan yang diarsipkan</p>
      )}
    </div>
  );
}

export default ArchiveList;
