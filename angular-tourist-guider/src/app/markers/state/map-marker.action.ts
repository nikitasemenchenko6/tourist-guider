import { createAction, props } from '@ngrx/store';

export const deleteMarker = createAction(
  '[MAP-MARKER DELETED] Toggle Trash Icon',
  props<{ id: Number }>()
);

export const searchFilter = createAction(
  '[MAP-MARKER SEARCH FILTER] input in searchbar',
  props<{ text: string }>()
);

export const sortMarkers = createAction(
  '[MAP-MARKER SORTED] radio inputs',
  props<{ text: string, ascending: boolean }>()
);
