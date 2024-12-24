import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import ArchiveList from './ArchiveList';
import { getInitialData } from '../utils/index.js';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchKeyword: '',
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, { id: Date.now(), title, body, archived: false, createAt: new Date().toISOString() }],
      };
    });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const noteToArchive = prevState.notes.find((note) => note.id === id);
      if (!noteToArchive) return;
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        archivedNotes: [...prevState.archivedNotes, { ...noteToArchive, archived: true }],
      };
    });
  }

  onUnarchiveHandler(id) {
    this.setState((prevState) => {
      const noteToUnarchive = prevState.archivedNotes.find((note) => note.id === id);
      return {
        archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
        notes: [...prevState.notes, { ...noteToUnarchive, archived: false }],
      };
    });
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
      archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
    }));
  }

  filterNotes(notes, keyword) {
    return notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  onSearchChangeHandler(e) {
    this.setState({ searchKeyword: e.target.value });
  }

  render() {
    const { notes, archivedNotes, searchKeyword } = this.state;

    const filteredNotes = this.filterNotes(notes, searchKeyword);

    const filteredArchivedNotes = this.filterNotes(archivedNotes, searchKeyword);
    return (
      <div className="note-app">
        <input type="text" className="searchKeyword" placeholder="Cari catatan berdasarkan judul..." value={this.state.searchKeyword} onChange={this.onSearchChangeHandler} />
        <h1>Aplikasi Catatan Pribadi</h1>
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={filteredNotes.length > 0 ? filteredNotes : []} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
        <ArchiveList notes={filteredArchivedNotes.length > 0 ? filteredArchivedNotes : []} onUnarchive={this.onUnarchiveHandler} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
