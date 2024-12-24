import React from 'react';
import { showFormattedDate } from '../utils/index.js';
function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="createAt-item">{showFormattedDate(createdAt)}</p>
      <textarea className="note-item__body" defaultValue={body} readOnly></textarea>
    </div>
  );
}

export default NoteItemBody;
