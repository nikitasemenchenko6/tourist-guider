import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { mapMarkerReducer } from 'src/app/markers/state/map-marker.reducer';
import { SearchFilterMarkerPipe } from './pipes/search-filter-marker/search-filter-marker.pipe';
import { CategoryFilterPipe } from './pipes/category-filter/category-filter.pipe';

@NgModule({
  declarations: [SearchFilterMarkerPipe, CategoryFilterPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature('mapMarkers', mapMarkerReducer),
  ],
  exports: [SearchFilterMarkerPipe, CategoryFilterPipe],
})
export class MapMarkerModule { }
