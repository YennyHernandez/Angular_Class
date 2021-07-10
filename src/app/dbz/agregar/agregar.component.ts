//este componente crea el personaje como objeto y se lo envia al padre mainpage para que lo agregue a la lista

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: personaje = {  //objeto definido que cambia con un input,  espera infromación del padre
    nombre:'',
    poder: 0
  };
  @Output() onNuevopersonaje: EventEmitter<personaje> =new EventEmitter();

  //cambiarnombre( event: any){
   // console.log(event.target.value)}

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log(this.nuevo)
    this.onNuevopersonaje.emit(this.nuevo) //se emite el evento
    //inserto nuevo personaje al objeto
    this.nuevo= { //se vuelve a dejar en blanco para escribir de nuevo
      nombre: '',
      poder:0
    }

  }
}


