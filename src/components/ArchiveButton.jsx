function ArchiveButton({ onArchive, id, isArchive }) {
  return (
    <button className="note-item__archive" onClick={() => onArchive(id)}>
      {isArchive ? 'Aktifkan' : 'Arsip'}
    </button>
  );
}

export default ArchiveButton;
