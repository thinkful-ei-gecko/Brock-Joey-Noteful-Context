import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Context from './Context'


export default class Note extends React.Component {
  static contextType = Context;

  render() {
    const note = this.context.notes.find(n => n.id === this.props.match.params.noteId)
    const selectedFolder = this.context.folders.find(folder => folder.id === note.folderId)
    return (
      <main>
        <Header />
        <p>{note.name}</p>
        <p>{note.content}</p>
        <p>{new Date(note.modified).toDateString()}</p>
        <p>{selectedFolder.name}</p>
        <button><Link to='/'>Go Back</Link></button>
      </main>
    )
  }
}
