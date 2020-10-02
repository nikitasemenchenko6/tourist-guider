// import { ItemActionTypes } from 'src/app/shared/enum/item-action-types';
import { ActionParent } from 'src/app/actions/map-item.action';
import { MapMarker } from 'src/app/models/MapMarker';
import { mapItems } from 'src/assets/dummy-data/dummy-items.js';

export const initState: MapMarker[] = mapItems;

export function MapMarkerReducer(state = initState, action: ActionParent) {
  switch (action.type) {
    default:
      return state;
  }
}
