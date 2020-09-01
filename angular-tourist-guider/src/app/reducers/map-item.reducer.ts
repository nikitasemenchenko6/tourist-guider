import { ItemActionTypes } from 'src/app/shared/enum/item-action-types';
import { ActionParent } from 'src/app/actions/map-item.action';
import { Item } from 'src/app/models/Item';
import { mapItems } from 'src/assets/dummy-data/dummy-items.js';

export const initState: Item[] = mapItems;

export function ItemReducer(state = initState, action: ActionParent) {
  switch (action.type) {
    default:
      return state;
      break;
  }
}
