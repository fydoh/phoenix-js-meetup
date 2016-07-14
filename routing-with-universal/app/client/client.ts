// U:upolyfills
import 'angular2-universal/polyfills';
// U: ubootstrap
import { bootstrap } from 'angular2-universal';
//import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {prebootComplete} from 'angular2-universal';

import {VehicleSearchComponent} from './search/vehicle-search.component';
import {VehicleDetailComponent} from './detail/vehicle-detail.component';

setTimeout(function () {
    bootstrap(AppComponent, [...HTTP_PROVIDERS, provideRouter(routes)]).then(function () { 
        let environment = document.getElementById('environment'); 
        environment.innerText = 'Client';
        environment.setAttribute('class', 'environment environment-client');
    })
    // .then(() => {
    //     setTimeout(function() {
    //         prebootComplete
    //     }, 400);
    // })
    ;
}, 5000);

