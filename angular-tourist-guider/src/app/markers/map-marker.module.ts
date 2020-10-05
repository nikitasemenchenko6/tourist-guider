import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { mapMarkerReducer } from 'src/app/markers/state/map-marker.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mapMarkers', mapMarkerReducer),
  ],
  exports: [],
})
export class MapMarkerModule {}
