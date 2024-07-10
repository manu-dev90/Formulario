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
import { TraductorComponent } from './traductor/traductor.component';
import { FechaComponent } from './fecha/fecha.component';


@NgModule({
 declarations: [
    AppComponent,
    CalendarComponent,
    TraductorComponent,
    FechaComponent,
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
