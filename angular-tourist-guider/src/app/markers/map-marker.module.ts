import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { mapMarkerReducer } from 'src/app/markers/state/map-marker.reducer';
import { SearchFilterMarkerPipe } from './pipes/search-filter-marker/search-filter-marker.pipe';

@NgModule({
  declarations: [SearchFilterMarkerPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature('mapMarkers', mapMarkerReducer),
  ],
  exports: [SearchFilterMarkerPipe],
})
export class MapMarkerModule { }
