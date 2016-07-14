import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class VehicleService {

    constructor(private http: Http) {
    }

    getVehicles(color: string) {
        let url = 'api/vehicles';
        url += (color) ? '?color=' + color : '';
        
        return this.http.get(url);
    }

    getVehicle(id: number) {
        let url = 'api/vehicles/' + id;
        return this.http.get(url);
    }
}