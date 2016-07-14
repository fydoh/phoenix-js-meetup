import { RouterConfig } from '@angular/router';
import { VehicleSearchComponent } from './search/vehicle-search.component';
import { VehicleDetailComponent } from './detail/vehicle-detail.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: VehicleSearchComponent },
  { path: 'detail/:id', component: VehicleDetailComponent },
  { path: '**', redirectTo: 'search', pathMatch: 'full'}
];
