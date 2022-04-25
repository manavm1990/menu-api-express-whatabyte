export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type NewMenuItemType = Omit<MenuItem, 'id'>;
