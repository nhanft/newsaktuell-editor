import * as React from 'react';
import {Editor, EditorState} from 'draft-js';
import SpaceRule from "../transformation/space-rule";

export default class NewsaktuellEditor extends React.Component<any, any> {

  private transformation = new SpaceRule();

  constructor(props: Props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  render() {
    return (
      <div>
        <Editor editorState={ this.editorState() } onChange={ this.handleInput }/>
        <button onClick={ this.transform }>Speichern</button>
      </div>
    )
  }

  transform = () => {
    return alert(this.transformation.transform(this.editorState().getCurrentContent().getPlainText()));
  };

  private editorState = (): EditorState => {
    return this.state.editorState;
  };

  private handleInput = (editorState: EditorState): void => {
    this.setState({editorState: editorState});
  };

}

interface Props {
  color: string;
}
