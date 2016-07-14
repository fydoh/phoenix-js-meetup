// U:upolyfills
import 'angular2-universal/polyfills';
// U: ubootstrap
import { bootstrap } from 'angular2-universal';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

setTimeout(function () {
    bootstrap(AppComponent, [HTTP_PROVIDERS]).then(function () { 
        let environment = document.getElementById('environment'); 
        environment.innerText = 'Client';
        environment.setAttribute('class', 'environment environment-client');
    }); 
}, 5000);

