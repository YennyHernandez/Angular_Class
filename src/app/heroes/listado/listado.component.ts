import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
heroes:string[] = ['Spiderman','Hulk','Ironman'] //propiedades de la clase no variables
Heroeborrado: string = ""

borrar(){
const heroeborrado =  this.heroes.shift() || '';
this.Heroeborrado = heroeborrado;
}

}
