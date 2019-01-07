import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomsComponent} from './homs/homs.component';
import { MinersComponent } from './hummers/miners/miners.component';
import { AboutComponent } from './about/about.component';
import { WorkerComponent } from './worker/worker.component';
;
const routes: Routes = [
  {path:'homs', component: HomsComponent },
  {path: 'hummers', component: MinersComponent},
  {path:'about', component: AboutComponent },
  {path:'worker', component: WorkerComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'homs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes);