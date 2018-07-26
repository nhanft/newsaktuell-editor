import * as React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import * as convertToHTML from 'draft-convert';
import NewsformatBuilder from 'na-newsformat';

export default class NaEditor extends React.Component<any, any> {

  constructor(props: Props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  render() {
    return (
      <div>
        <nav className={'level'}>
          <button onClick={ this.bold }>Bold</button>
          <button onClick={ this.italic }>Italic</button>
        </nav>
        <Editor editorState={ this.editorState() } onChange={ this.handleInput }/>
        <button onClick={ this.transform }>Speichern</button>
      </div>
    );
  }

  bold = () => {
    this.handleInput(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  italic = () => {
    this.handleInput(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  };

  transform = () => {
    const html = convertToHTML(this.editorState().getCurrentContent());
    return new NewsformatBuilder(html)
      .removeNestedLists()
      .build();
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
