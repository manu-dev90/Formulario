import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  validationInput(event: KeyboardEvent) 
  {
    const input = event.key;

    if(input === 'Backspace') 
      {
        return;
      }

    if(isNaN(Number(input)))
      {
        event.preventDefault();
      }
  }
  

  fechaInicio: Date[] | null;
  fechaFin: Date[] | null;
  lista: any[];
  nombre: string ;
  cantidad: number | null ;
  descripcion: string;



  constructor()
  {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.lista = [];
    this.nombre = '';
    this.cantidad = null;
    this.descripcion = '';
  }

  onSubmit() 
  {
    this.lista.push(
      {
        nombre: this.nombre,
        cantidad: this.cantidad,
        descripcion: this.descripcion,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      }
    );

    this.nombre = '' ;
    this.cantidad = null;
    this.descripcion = '';
    this.fechaInicio = null;
    this.fechaFin = null; 
  
  
  }

}
