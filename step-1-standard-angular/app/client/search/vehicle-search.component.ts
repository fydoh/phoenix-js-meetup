import {Component} from '@angular/core';
import {VehicleFiltersComponent} from './vehicle-filters.component';
import {VehicleResultsComponent} from './vehicle-results.component';

@Component({
    selector: 'vehicle-search',
    templateUrl: 'app/client/search/vehicle-search.component.html',
    directives: [VehicleFiltersComponent, VehicleResultsComponent]
})
export class VehicleSearchComponent {
    selectedColor: string = '';

    onColorChanged(color: string) {
        this.selectedColor = color;
    }
}
