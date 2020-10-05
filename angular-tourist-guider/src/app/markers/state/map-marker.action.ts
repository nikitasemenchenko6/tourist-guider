import { createAction, props } from '@ngrx/store';

export const deleteMarker = createAction(
  '[MAP-MARKER DELETED] Toggle Trash Icon',
  props<{ id: Number }>()
);
