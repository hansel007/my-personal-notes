import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const inputTitle = e.target.value;

    if (inputTitle.length <= 50) {
      this.setState({ title: inputTitle });
    }
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Judul Catatan... (Maksimal 50 karakter)" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea placeholder="Isi sebuah catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Buat Catatan</button>
      </form>
    );
  }
}

export default NoteInput;
