import {Component, Input} from '@angular/core';
import {VehicleService} from './vehicle.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'vehicle-results',
    templateUrl: 'app/client/search/vehicle-results.component.html',
    providers: [VehicleService],
    directives: [
        ...ROUTER_DIRECTIVES
    ]
})
export class VehicleResultsComponent {
    vehicles = [];

    _color: string = '';
    @Input()
    set color(color: string) {
        console.log('color change', color);
        this._color = color;
        this.getVehicles(color);
    }
    get color() {
        return this._color;
    }

    constructor(private vehicleService: VehicleService) {
    }

    private getVehicles(color: string) {
        this.vehicleService.getVehicles(color)
            .subscribe(result => {
                this.vehicles = result.json();
            });
    }
}