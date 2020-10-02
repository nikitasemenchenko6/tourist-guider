import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { MapMarkerReducer } from 'src/app/markers/state/map-marker.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mapMarkers', MapMarkerReducer),
  ],
  exports: [],
})
export class MarkerModule {}
