//este componente crea el personaje como objeto y se lo envia al padre mainpage para que lo agregue a la lista, pero luego se refactoriza para que personajes reciba directamente del servicio la información deseada.

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';
import { DBZservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: personaje = {  //objeto definido que cambia con un input,  espera infromación del padre main-page que me muetra info por defecto
    nombre:'',
    poder: 0
  };
  //@Output() onNuevopersonaje: EventEmitter<personaje> =new EventEmitter();

  //cambiarnombre( event: any){
   // console.log(event.target.value)}

   constructor(private dbzService: DBZservice){} //importo el servicio  para usar en este caso el metodo agregar
  agregar(){
    this.dbzService.agregarpersonaje(this.nuevo);  //aqui como nueva forma agrega a la lista por medio del servicio
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log(this.nuevo)
    //this.onNuevopersonaje.emit(this.nuevo) //se emite el evento
    //inserto nuevo personaje al objeto
    this.nuevo= { //se vuelve a dejar en blanco para escribir de nuevo
      nombre: '',
      poder:0
    }

  }
}


