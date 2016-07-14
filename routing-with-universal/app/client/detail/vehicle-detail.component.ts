import {Component} from '@angular/core';
import {VehicleService} from '../search/vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vehicle-detail',
    templateUrl: 'app/client/detail/vehicle-detail.component.html',
    providers: [VehicleService]
})
export class VehicleDetailComponent {
    private sub: any;
    vehicle: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private vehicleService: VehicleService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.vehicleService.getVehicle(id)
                .subscribe(result => {
                    this.vehicle = result.json();
                });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
