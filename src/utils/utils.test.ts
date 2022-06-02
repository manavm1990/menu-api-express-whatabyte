import { MenuItemFilter } from '../types/menu-item';
import { makeValuesLowercase } from './utils';

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
