import { Component } from '@angular/core';

@Component({//lo pongo primero + tab y sale solo el import
  selector: 'app-heroe',
  templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
nombre:string ='Ironman';
edad:number = 43;

get ObtenerNombreCapitalizado():string{ //parecido a un metodo pero no lo es
return this.nombre.toUpperCase();
}
ObtenerNombre():string{
  return `${this.nombre} - ${this.edad}`;
}
CambiarNombre():void{
  this.nombre = 'Spiderman';
}


}
