import { showFormattedDate } from '../utils/index.js';
function NoteArchiveBody({ title, createdAt, body }) {
  return (
    <div className="note-archive__body">
      <h3 className="note-archive__title">{title}</h3>
      <p className="note-archive__date">{showFormattedDate(createdAt)}</p>
      <textarea name="note-item__body" defaultValue={body} readOnly>
        {body}
      </textarea>
    </div>
  );
}

export default NoteArchiveBody;
