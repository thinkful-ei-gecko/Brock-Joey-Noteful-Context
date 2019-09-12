import React from 'react';
import Nav from './Nav';
import Header from './Header'
import './FolderRoute.css'
import Context from './Context'



export default class FolderRoute extends React.Component {
  static contextType = Context;

  //console.log(props.match.params.folderId)
  //console.log(selectedNotes)
  render() {
    const folder = this.props.folders.find(f => f.id === this.props.match.params.folderId)
    const selectedNotes = this.props.notes.filter(notes => notes.folderId === folder.id).map(note => <li><h2>{note.name}</h2><p>Date Modified: {new Date(note.modified).toDateString()}</p><p>{note.content}</p></li>)
    return (
      <main>
        <Header />
        <div className="flexContainer">
          <Nav folders={this.props.folders} />
          <ul>{selectedNotes}</ul>
        </div>
      </main>
    )
  }
}