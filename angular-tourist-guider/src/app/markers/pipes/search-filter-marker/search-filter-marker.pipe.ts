import { Pipe, PipeTransform } from '@angular/core';
import { MapMarker } from 'src/app/models/MapMarker'

@Pipe({
  name: 'searchFilterMarker'
})
export class SearchFilterMarkerPipe implements PipeTransform {
  /**
   *
   * @param markers the Array of Items to be filtered
   * @param filter the string/text use to filter the array of markers
   */
  transform(markers: MapMarker[], filter: string): MapMarker[] {
    if (!markers || !filter) {
      return markers
    }
    return markers.filter(item => {
      const name = item.name.toLowerCase();
      const desc = item.description.toLowerCase();
      const searchFilter = filter.toLowerCase();
      if (name.indexOf(searchFilter) >= 0 || desc.indexOf(searchFilter) >= 0) {
        return item
      }
    })
  }

}
