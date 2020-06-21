import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GardenService } from './services/garden.service';
import { WateringListComponent } from './components/watering-list/watering-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WateringListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgbModule

  ],
  providers: [
   GardenService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
