import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { LHComponent } from './components/lh/lh.component';
import { MapComponent } from './components/map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './components/accounts/accounts.component';
import { PredictionComponent } from './components/prediction/prediction.component';

/* Calendar modules */
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

/* Time modules */
import { HammerModule } from "@angular/platform-browser";

/* Map modules */ 
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    AboutComponent,
    LHComponent,
    AccountsComponent,
    PredictionComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HammerModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: "Place your key here",
      libraries: ["places", "geometry"]
      /* apiKey is required, for google maps API use */
  })
  ],
  providers: [
    GoogleMapsAPIWrapper,
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL']
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}
