export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Utility Type
export type NewMenuItemType = Omit<MenuItem, 'id'>;

export type MenuItemFilter =
  | Partial<MenuItem>
  | {
      // TODO: Explore MongoDB indexing for searchable strings, regex, etc.
      price: Object;
    };
