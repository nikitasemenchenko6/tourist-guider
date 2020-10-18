import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchFilter } from 'src/app/markers/state/map-marker.action';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void { }

  searching(event: Event) {
    const output = event.target as HTMLInputElement
    // console.log(output.value)
    this.store.dispatch(searchFilter({ text: output.value }))
  }
}
