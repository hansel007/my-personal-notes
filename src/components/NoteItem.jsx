import NoteItemBody from './NoteItemBody';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItem({ id, title, createdAt, body, onArchive, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <ArchiveButton id={id} archived={false} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
