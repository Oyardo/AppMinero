import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para el form final
import { FormsModule } from '@angular/forms';
// para toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//firbase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//Componetes hummer
import { MinersComponent } from './hummers/miners/miners.component';
import { MinerListComponent } from './hummers/miners/miner-list/miner-list.component';
import { MinerComponent } from './hummers/miners/miner/miner.component';
//for service
import { MinerService } from './services/miner.service';
import { HomsComponent} from './homs/homs.component';
//rutas last
import { app_routing } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { WorkerComponent } from './worker/worker.component';
//auth0
import {AuthService} from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    MinersComponent,
    MinerListComponent,
    MinerComponent,
    HomsComponent,
    AboutComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    app_routing 
  ],
  providers: [
    MinerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
