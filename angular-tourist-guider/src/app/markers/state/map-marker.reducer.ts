// import { ItemActionTypes } from 'src/app/shared/enum/item-action-types';
import { createReducer } from '@ngrx/store';
import { MapMarker } from 'src/app/models/MapMarker';
import { mapItems } from 'src/assets/dummy-data/dummy-items.js';

export const initState: MapMarker[] = mapItems;

export const mapMarkerReducer = createReducer<MapMarker[]>(initState);
