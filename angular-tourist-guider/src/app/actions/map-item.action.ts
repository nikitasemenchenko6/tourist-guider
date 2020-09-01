import { Action } from '@ngrx/store';
import { ItemActionTypes } from '../shared/enum/item-action-types';

export class ActionParent implements Action {
  type: any;
  payload: any;
}

export class ItemAdd implements ActionParent {
  type: ItemActionTypes.Add;
  constructor(public payload: any) {}
}
