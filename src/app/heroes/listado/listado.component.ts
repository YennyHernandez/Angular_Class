import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
heroes:string[] = ['Spiderman','Hulk','Ironman'] //propiedades de la clase no variables
Heroeborrado: string = ""
condition: boolean = false

borrar(){
const heroeborrado =  this.heroes.shift() || '';
this.Heroeborrado = heroeborrado;
this.condition = true;
}

}
