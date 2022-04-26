import config from '../config';
import got from 'got';
import { MenuItem, MenuItemFilter } from '../types/menu-item.d';

export default {
  find(filter: MenuItemFilter = {}): Promise<MenuItem[]> {
    return got
      .post(`${config.api.apiEndpoint}/action/find`, {
        headers: {
          'api-key': config.api.apiKey,
        },
        json: {
          dataSource: config.db.dataSource,
          database: config.db.dataBase,
          collection: config.db.collection,
          filter,
        },
      })
      .json();
  },
};
