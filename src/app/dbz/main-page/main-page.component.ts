import { Component} from '@angular/core';
import { personaje} from '../inferfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  personajes : personaje[] =[
  {
    nombre: 'Goku',
    poder: 8000
  },
  {
    nombre: 'Vegueta',
    poder: 15000
  }
]

nuevo: personaje = {  //objeto definido que cambia con un input
  nombre:'Por defecto',
  poder: 0
}


}
