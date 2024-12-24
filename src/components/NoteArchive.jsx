import NoteItemBody from './NoteItemBody';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import { showFormattedDate } from '../utils/index.js';

function NoteArchive({ id, title, createdAt, body, onUnArchive, onDelete }) {
  return (
    <div className="note-item__archive">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <ArchiveButton id={id} onArchive={onUnArchive} archived={true} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteArchive;
