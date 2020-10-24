import { Pipe, PipeTransform } from '@angular/core';
import { MapMarker } from 'src/app/models/MapMarker';
@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
  transform(markers: MapMarker[], category: string): MapMarker[] {
    if (!markers || !category || category == 'all') {
      return markers;
    }
    return markers.filter((item) => item.category == category);
  }
}
