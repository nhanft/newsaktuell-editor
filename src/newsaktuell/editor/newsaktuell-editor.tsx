import * as React from 'react';
import { Editor, EditorState } from 'draft-js';

export class NewsaktuellEditor extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  render() {
    return (
      <Editor editorState={this.editorState()} onChange={this.handleInput}/>
    )
  }

  private editorState(): EditorState {
    return this.state.editorState;
  }

  private handleInput(editorState: EditorState): void {
    console.log("Hello ", editorState.getCurrentContent().getPlainText())
  }

}

interface Props {
  color: any;
}
