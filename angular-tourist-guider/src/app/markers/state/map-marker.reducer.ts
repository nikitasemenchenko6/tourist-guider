// import { ItemActionTypes } from 'src/app/shared/enum/item-action-types';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { MapMarker } from 'src/app/models/MapMarker';
import { mapItems } from 'src/assets/dummy-data/dummy-items.js';
import * as MapMarkerActions from 'src/app/markers/state/map-marker.action';

// set mapMarkers initial State Interface
export interface mapMarkerStateInterface {
  selectedMarker: MapMarker;
  markers: MapMarker[];
  searchFilter: string;
}
// set mapMarkers initial state values
export const initState: mapMarkerStateInterface = {
  selectedMarker: null,
  markers: mapItems,
  searchFilter: ''
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
// create selectors for searchFilter
export const getSearchFilter = createSelector(
  getMapMarkerFeatureState,
  (state) => state.searchFilter
)

export const mapMarkerReducer = createReducer<mapMarkerStateInterface>(
  initState,
  on(
    MapMarkerActions.deleteMarker,
    (state, actions): mapMarkerStateInterface => {
      const markers = state.markers.filter((item) => item.id != actions.id);
      return {
        ...state,
        // we replace the previous markers with the new markers
        markers,
      };
    }
  ),
  on(
    MapMarkerActions.searchFilter,
    (state, actions): mapMarkerStateInterface => {
      return {
        ...state,
        // we add new value to our searchFilter state
        searchFilter: actions.text
      }
    }
  )
);
