// import { ItemActionTypes } from 'src/app/shared/enum/item-action-types';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import { MapMarker } from 'src/app/models/MapMarker';
import { mapItems } from 'src/assets/dummy-data/dummy-items.js';

// set mapMarkers initial State Interface
export interface mapMarkerStateInterface {
  selectedMarker: MapMarker;
  markers: MapMarker[];
}
// set mapMarkers initial state values
export const initState: mapMarkerStateInterface = {
  selectedMarker: null,
  markers: mapItems,
};
// we make mapMarker selector
const getMapMarkerFeatureState = createFeatureSelector<mapMarkerStateInterface>(
  'mapMarkers'
);
// create selectors for markers
export const getMarkers = createSelector(
  getMapMarkerFeatureState,
  (state) => state.markers
);

export const mapMarkerReducer = createReducer<mapMarkerStateInterface>(
  initState
);
