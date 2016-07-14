// U:upolyfills
// U:uimport
// U:appimport

import 'angular2-universal/polyfills';
import {
    provide,
    expressEngine,
    ORIGIN_URL,
    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    REQUEST_URL,
    BASE_URL
} from 'angular2-universal';
import {AppComponent} from '../client/app.component';

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

// U:uconfig
function universalApp(req, res) {
    console.log('change');
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    let config = {
        directives: [AppComponent],
        platformProviders: [
            provide(ORIGIN_URL, { useValue: 'http://localhost:' + port }),
            provide(BASE_URL, {useValue: baseUrl})
        ],
        providers: [
            provide(REQUEST_URL, {useValue: url}),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS
        ],
        async: true,
        preboot: true
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

// server
app.listen(port, () => {
    console.log('Listening on http://localhost:' + port);
});