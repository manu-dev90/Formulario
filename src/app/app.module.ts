import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarComponent } from './calendar/calendar.component';
import { FechaInicioComponent } from './fecha-inicio/fecha-inicio.component';
import { FechaFinComponent } from './fecha-fin/fecha-fin.component';
import { TraductorComponent } from './traductor/traductor.component';

@NgModule({
 declarations: [
    AppComponent,
    CalendarComponent,
    FechaInicioComponent,
    FechaFinComponent,
    TraductorComponent,
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
export class AppModule { }
