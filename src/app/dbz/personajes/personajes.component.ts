import { Component, Input} from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {
@Input()
personajes:personaje[] = [];

}
