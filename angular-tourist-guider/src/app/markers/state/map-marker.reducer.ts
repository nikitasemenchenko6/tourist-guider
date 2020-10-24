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
  categoryFilter: string;
}
// set mapMarkers initial state values
export const initState: mapMarkerStateInterface = {
  selectedMarker: null,
  markers: [...mapItems],
  searchFilter: '',
  categoryFilter: 'all',
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
);
// create selector for categoryFilter
export const getCategoryFilter = createSelector(
  getMapMarkerFeatureState,
  (state) => state.categoryFilter
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
        searchFilter: actions.text,
      };
    }
  ),
  on(
    MapMarkerActions.categoryFilter,
    (state, actions) => {
      return {
        ...state,
        categoryFilter: actions.text
      };
    }
  ),
  on(
    MapMarkerActions.sortMarkers,
    (state, actions): mapMarkerStateInterface => {
      let markers: MapMarker[] = state.markers;
      switch (actions.text) {
        case 'date':
          if (actions.ascending) {
            markers = [...state.markers].sort((a, b) => {
              return (
                new Date(b.created).getTime() - new Date(a.created).getTime()
              );
            });
          } else {
            markers = [...state.markers].sort((a, b) => {
              return (
                new Date(a.created).getTime() - new Date(b.created).getTime()
              );
            });
          }
          break;
        case 'name':
          if (actions.ascending) {
            markers = [...state.markers].sort((a, b) => {
              return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            });
          } else {
            markers = [...state.markers].sort((a, b) => {
              return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
            });
          }
          break;

        default:
          markers = [...mapItems];
          break;
      }
      return {
        ...state,
        markers,
      };
    }
  )
);
