import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '.pnpm/@angular+common@12.0.5_@angular+core@12.0.5+rxjs@6.6.7/node_modules/@angular/common';
@NgModule({
  declarations:[
  HeroeComponent,
  ListadoComponent
  ],
  exports:[
    ListadoComponent,

  ],
  imports:[
  CommonModule  //hay que importar el modulo que usa las directivas ngif ngfor ... si no, no se pueden visualizar

  ]

})

export class HeroesModule {}
