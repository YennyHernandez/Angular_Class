import { Component} from '@angular/core';
import { personaje} from '../inferfaces/dbz.interface';
import { DBZservice } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {



nuevo: personaje = {  //objeto definido que cambia con un input
  nombre:'Por defecto',
  poder: 0
}


constructor(){}

}
