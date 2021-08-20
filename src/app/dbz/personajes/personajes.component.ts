//Este componente me muestra en pantalla la lista de los personajes , que anteriormente era
//recibia informacion del modulo padre main page pero ahora usa el servicio por medio de un get.
import { Component, Input} from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';
import { DBZservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {
// @Input() personajes:personaje[] = [];
get personajes(){   //obtiene la informacion del servicio 
    return this.dbzservice.personajes;
  }

constructor( private dbzservice: DBZservice){

}

}
