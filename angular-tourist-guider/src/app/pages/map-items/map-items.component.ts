import { Component, OnInit } from '@angular/core';
// import { mapItems } from '../../../assets/dummy-data/dummy-items.js';
import { Item } from 'src/app/models/Item';
// import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss'],
})
export class MapItemsComponent implements OnInit {
  p: number = 1;
  mapItems: Item[];

  constructor(private store: Store<{ items: Item[] }>) {
    this.store.pipe(select('items')).subscribe((values) => {
      console.log(values);
      this.mapItems = values;
    });
  }

  ngOnInit(): void {}
}
