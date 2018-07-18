import * as React from 'react';
import { shallow } from 'enzyme';
import {NewsaktuellEditor} from "../../../src/newsaktuell/editor/newsaktuell-editor";


describe('NewsaktuellEditor', () => {

  test('hello', async () => {
    const editor = shallow(<NewsaktuellEditor></NewsaktuellEditor>);
    expect(editor.text()).toContain("<DraftEditor />")
  });

});

