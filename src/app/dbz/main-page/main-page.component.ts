import { Component} from '@angular/core';

interface personaje{
  nombre: string;
  poder: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  personajes : personaje[] =[
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegueta',
    poder: 15000
  }
]

  nuevo: personaje = {  //objeto definido que cambia con un input
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
