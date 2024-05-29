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

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
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
        dayNames: ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],
        dayNamesShort: ["dom","lun","mar","mie","jue","vie","sab"],
        dayNamesMin: ["D","L","M","X","J","V","S"],
        monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        monthNamesShort: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
        today: 'Hoy',
        clear: 'Limpiar',
        firstDayOfWeek: 1,
      }
    );
  }
}
