import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapItemsComponent } from './map-items.component';

describe('MapItemsComponent', () => {
  let component: MapItemsComponent;
  let fixture: ComponentFixture<MapItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
