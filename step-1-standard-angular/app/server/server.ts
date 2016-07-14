// U:upolyfills
// U:uimport
// U:appimport

// express
import * as path from 'path';
import * as express from 'express';

const port = 3000;
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// U:setappengine

// views
app.set('views', __dirname);

// U:uroutes
app.get('/search', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});
// U:uconfig

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