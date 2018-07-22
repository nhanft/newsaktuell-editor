import * as React from 'react';
import {shallow} from 'enzyme';
import NewsaktuellEditor from "../../../src/newsaktuell/editor/newsaktuell-editor";

describe('NewsaktuellEditor', async () => {

  it('hello', async () => {
    const editor = shallow(<NewsaktuellEditor/>);
    expect(editor.text()).toContain("<DraftEditor />")
  });

  it('Unit test for props', async () => {
    let editor = <NewsaktuellEditor/>;
    expect(editor.props.color).toBe(undefined);
    editor = <NewsaktuellEditor color={"any"}/>;
    expect(editor.props.color).toEqual("any");
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<NewsaktuellEditor><h2>Hello World</h2></NewsaktuellEditor>);
  });

});
