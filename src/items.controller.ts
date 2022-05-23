import got from 'got';
import config from './config';
import { MenuItem, MenuItemFilter, NewMenuItem } from './types/menu-item.d';

interface DeletedItemResponse {
  deletedCount: number;
}

const endpoint = config.api.apiEndpoint;
const headers = {
  'api-key': config.api.apiKey,
};
const dbConfig = {
  dataSource: config.db.dataSource,
  database: config.db.dataBase,
  collection: config.db.collection,
};

// ⚠️ All things with DATA API are POST requests
export default {
  find(filter: MenuItemFilter = {}): Promise<MenuItem[]> {
    // TODO: Iterate over all filter values and make them lowercase

    return got
      .post(`${endpoint}/action/find`, {
        headers,
        json: {
          ...dbConfig,
          filter,
        },
      })
      .json();
  },

  // TODO: Be sure to normalize all strings to lowercase
  create(newMenuItem: NewMenuItem): Promise<MenuItem> {
    return got
      .post(`${endpoint}/action/insertOne`, {
        headers,
        json: {
          ...dbConfig,
          newMenuItem,
        },
      })
      .json();
  },
  update(id: string, newMenuItem: NewMenuItem): Promise<MenuItem> {
    return got
      .post(`${endpoint}/action/updateOne`, {
        headers,
        json: {
          ...dbConfig,
          filter: { _id: { $oid: id } },
          update: { $set: newMenuItem },
        },
      })
      .json();
  },

  remove(id: string): Promise<DeletedItemResponse> {
    return got
      .post(`${endpoint}/action/deleteOne`, {
        headers,
        json: {
          ...dbConfig,
          filter: { _id: { $oid: id } },
        },
      })
      .json();
  },
};
