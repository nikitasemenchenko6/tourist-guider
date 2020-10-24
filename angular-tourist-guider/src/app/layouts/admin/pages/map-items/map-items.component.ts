import { Component, OnInit } from '@angular/core';
// import { mapItems } from '../../../assets/dummy-data/dummy-items.js';
import { MapMarker } from 'src/app/models/MapMarker';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  getMarkers,
  getSearchFilter,
  getCategoryFilter,
} from 'src/app/markers/state/map-marker.reducer';
import {
  deleteMarker,
  sortMarkers,
  categoryFilter,
} from 'src/app/markers/state/map-marker.action';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss'],
})
export class MapItemsComponent implements OnInit {
  p: number = 1;
  sortBy: {
    value: string;
    ascending: boolean;
  } = {
    value: 'none',
    ascending: false,
  };
  mapItems: Observable<MapMarker[]>;
  searchFilter: string;
  categoryFilter: string;

  constructor(private store: Store<{ mapMarkers: MapMarker[] }>) {}

  ngOnInit(): void {
    /**  we get markers for mapItems */
    this.mapItems = this.store.select(getMarkers);
    // this.mapItems.subscribe((e) => console.log(e));

    /** we get the texts for search filtered */
    this.store.select(getSearchFilter).subscribe((item) => {
      this.searchFilter = item;
    });
    /** we get the value for categoryFilter */
    this.store.select(getCategoryFilter).subscribe((item) => {
      this.categoryFilter = item;
    });
  }
  /**
   *
   * @param id - the ID of the item to be deleted
   */
  deleteItem(id: number) {
    this.store.dispatch(deleteMarker({ id }));
  }
  /**
   *
   * @param value - a text to determin on what way the markers will be sorted
   */
  selectSortBy(text: string) {
    if (text == this.sortBy.value) {
      this.sortBy.ascending = !this.sortBy.ascending;
    } else {
      this.sortBy.ascending = true;
    }
    this.sortBy.value = text;
    const ascending = this.sortBy.ascending;
    this.store.dispatch(sortMarkers({ text, ascending }));
  }
  selectShowBy(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.store.dispatch(categoryFilter({ text }));
  }
}
