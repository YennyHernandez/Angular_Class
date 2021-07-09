import { Component, Input } from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  @Input() personajes: personaje[] =[];
  @Input() nuevo: personaje = {  //objeto definido que cambia con un input,  espera infromación del padre
    nombre:'',
    poder: 0
  }

  //cambiarnombre( event: any){
   // console.log(event.target.value)}

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log(this.nuevo, this.personajes)
    this.personajes.push(this.nuevo); //inserto nuevo personaje al objeto
    this.nuevo= { //se vuelve a dejar en blanco para escribir de nuevo
      nombre: '',
      poder:0
    }

  }
}
