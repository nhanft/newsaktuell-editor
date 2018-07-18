import {SpaceRule} from "../../../src/newsaktuell/transformation/space-rule";


describe('NewsaktuellEditor', () => {

  test('SpaceRule', async () => {
    let html = "Hallo Welt";

    const rule = new SpaceRule();

    expect(rule.transform(html)).toBe("hallo welt");

  });

});
