import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { __values } from 'tslib';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { PrimeNGConfig } from 'primeng/api';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor (private primengConfigEs: PrimeNGConfig) 
  {
    this.primengConfigEs.setTranslation(
      {
        dayNames: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
        dayNamesShort: ["diu","dil","dim","dix","dij","div","dis"],
        dayNamesMin: ["diu.","dil.","dim.","dix.","dij.","div.","dis."],
        monthNames: ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],
        monthNamesShort: ["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],
        today: 'Hoy',
        clear: 'Limpiar',
        firstDayOfWeek: 1,
      }
    );
  }
}
