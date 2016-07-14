import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {VehicleSearchComponent} from './search/vehicle-search.component';
import {VehicleDetailComponent} from './detail/vehicle-detail.component';

@Component({
    selector: 'carvana-app',
    templateUrl: 'app/client/app.component.html',
    directives: [
        ...ROUTER_DIRECTIVES,
        VehicleSearchComponent,
        VehicleDetailComponent
    ]
})
export class AppComponent {}