import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchFilter } from 'src/app/markers/state/map-marker.action';
import {
  getSearchFilter,
  mapMarkerStateInterface,
} from 'src/app/markers/state/map-marker.reducer';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchField: string;
  haveSearched: boolean;

  constructor(private store: Store<{ mapMarkers: mapMarkerStateInterface }>) {}

  ngOnInit(): void {
    this.store.select(getSearchFilter).subscribe((item) => {
      this.searchField = item;
    });
  }
  /**
   *
   * @param event DOM Event Input field contains searched text value
   */
  searching(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    // console.log(output.value)
    this.store.dispatch(searchFilter({ text }));
  }
  /**
   *
   * @param event the new value of the changed "searchField"
   */
  checkSearchField(event: string) {
    if (!event.trim()) {
      this.clearSearchField();
    }
  }

  clearSearchField(): void {
    this.store.dispatch(searchFilter({ text: '' }));
    this.searchField = '';
  }
}
