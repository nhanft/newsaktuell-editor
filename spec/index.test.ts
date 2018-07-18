import * as React from 'react';
import * as enzyme from 'enzyme';
import NewsaktuellEdtior from '../src/index'

it('renders the correct text when no enthusiasm level is given', () => {
    const editor = new NewsaktuellEdtior();
    expect(editor.hello()).toEqual('Hello Daniel!')
});
