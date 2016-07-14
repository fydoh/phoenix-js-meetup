import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'vehicle-filters',
    templateUrl: 'app/client/search/vehicle-filters.component.html',
})
export class VehicleFiltersComponent {
    @Output() onColorChanged = new EventEmitter<string>();
    colors: string[] = ['White', 'Silver', 'Black', 'Gray', 'Blue', 'Red'];
    selectedColor: string = '';

    changeColor(color: string) {
        this.selectedColor = (color) ? color.toLowerCase() : null;
        this.onColorChanged.emit(this.selectedColor);
    }
}