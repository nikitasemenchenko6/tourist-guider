import { Component, OnInit } from '@angular/core';
// import { mapItems } from '../../../assets/dummy-data/dummy-items.js';
import { MapMarker } from 'src/app/models/MapMarker';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getMarkers, getSearchFilter } from 'src/app/markers/state/map-marker.reducer';
import { deleteMarker } from 'src/app/markers/state/map-marker.action';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss'],
})
export class MapItemsComponent implements OnInit {
  p: number = 1;
  mapItems: Observable<MapMarker[]>;
  searchFilter: string;

  constructor(private store: Store<{ mapMarkers: MapMarker[] }>) { }

  ngOnInit(): void {
    /**  we get markers for mapItems */
    this.mapItems = this.store.select(getMarkers);
    // this.mapItems.subscribe((e) => console.log(e));
    /** we get the texts for search filtered */
    this.store.select(getSearchFilter).subscribe(item => {
      this.searchFilter = item;
    });
  }

  deleteItem(id: number) {
    this.store.dispatch(deleteMarker({ id }))
  }
}
