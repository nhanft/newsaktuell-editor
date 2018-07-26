import * as React from 'react';
import {shallow} from 'enzyme';
import NaEditor from '../../../src/newsaktuell/editor/na-editor';

describe('NaEditor', async () => {

  it('hello', async () => {
    const editor = shallow(<NaEditor/>);
    expect(editor.text()).toContain("<DraftEditor />")
  });

  it('Unit test for props', async () => {
    let editor = <NaEditor/>;
    expect(editor.props.color).toBe(undefined);
    editor = <NaEditor color={"any"}/>;
    expect(editor.props.color).toEqual("any");
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<NaEditor><h2>Hello World</h2></NaEditor>);
  });

});
