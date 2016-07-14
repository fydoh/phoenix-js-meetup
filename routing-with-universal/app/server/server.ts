// U:upolyfills
// U:uimport
// U:appimport

import 'angular2-universal/polyfills';
import {
    provide,
    expressEngine,
    REQUEST_URL,
    ORIGIN_URL,
    NODE_LOCATION_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    NODE_ROUTER_PROVIDERS,
    ExpressEngineConfig
} from 'angular2-universal';
// *** NODE_LOCATION_PROVIDERS, replaced NODE_ROUTER_PROVIDERS,

// *** These next 2 lines run the router on the server:
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import {AppComponent} from '../client/app.component';

// ***
import {routes} from '../client/app.routes';


// express
import * as path from 'path';
import * as express from 'express';

const port = 3000;
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// U:setappengine
app.engine('html', expressEngine);
app.set('view engine', 'html');
// views
app.set('views', __dirname);

// U:uroutes
app.use('/search', universalApp);
app.use('/detail', universalApp);

// U:uconfig
function universalApp(req, res) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';

// *** the providers node changed to be provideRouter and NODE_LOCATION_PROVIDERS

    let config: ExpressEngineConfig = {
        directives: [
            AppComponent
        ],
            platformProviders: [
            {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
            {provide: APP_BASE_HREF, useValue: baseUrl},
        ],
        providers: [
            {provide: REQUEST_URL, useValue: url},
            NODE_HTTP_PROVIDERS,
            provideRouter(routes),
            NODE_LOCATION_PROVIDERS
        ],
        async: true,
        preboot: true // {appRoot: 'carvana-app', buffer: true } // { appRoot: 'app' } // your top level app component selector
    };

    res.render('index', config);
}

// static files
app.use(express.static(ROOT, { index: false }));

// api
import {VehicleData} from './database/vehicle-db';
app.get('/api/vehicles', (req, res) => {
	let color = req.query.color;
	let api = new VehicleData();
    let result = api.getVehicles(color);
    res.json(result);
});

app.get('/api/vehicles/:id', (req, res) => {
	let id = req.params.id;
	let api = new VehicleData();
    let result = api.getVehicle(id);
    res.json(result);
});

// server
app.listen(port, () => {
    console.log('Listening on http://localhost:' + port);
});