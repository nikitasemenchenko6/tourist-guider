import { Component, OnInit } from '@angular/core';
import { mapItems } from '../../../assets/dummy-data/dummy-items.js';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss'],
})
export class MapItemsComponent implements OnInit {
  constructor() {}

  public mapItems = mapItems;
  ngOnInit(): void {
    console.log(this.mapItems);
  }
}
