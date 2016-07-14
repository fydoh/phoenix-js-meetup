import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {VehicleSearchComponent} from './search/vehicle-search.component';

@Component({
    selector: 'carvana-app',
    templateUrl: 'app/client/app.component.html',
    directives: [VehicleSearchComponent]
})
export class AppComponent {}