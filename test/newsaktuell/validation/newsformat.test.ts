import {Newsformat} from "../../../src/newsaktuell/validation/newsformat";


describe('Validation', () => {

  test('Newsformat', async () => {
    let html = "Hallo Welt";

    const format = new Newsformat(html);

    expect(format.isValid()).toBe(false);

  });

});

