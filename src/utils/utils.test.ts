import { MenuItemFilter } from '../types/menu-item';
import { makeValuesLowercase } from './utils';

describe('makeValuesLowercase', () => {
  it('should make values lowercase', () => {
    const filter: MenuItemFilter = {
      name: 'TEST',
      description: 'TEST',
    };

    const expected: MenuItemFilter = {
      name: 'test',
      description: 'test',
    };

    expect(makeValuesLowercase(filter)).toEqual(expected);
  });

  it("shouldn't change values that aren't strings", () => {
    const filter: MenuItemFilter = {
      name: 'TEST',
      description: 'TEST',
      price: 10,
    };

    const expected: MenuItemFilter = {
      name: 'test',
      description: 'test',
      price: 10,
    };

    expect(makeValuesLowercase(filter)).toEqual(expected);
  });
});
