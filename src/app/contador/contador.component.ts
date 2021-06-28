import { Component } from '@angular/core';  //importar el decorador

@Component({ //decorador de que es un componente
  selector: 'app-contador', //asi se llamo el selector <></>  del componente
  template: `

  <h1>{{title}}</h1>  //aqui no use un contador.html porque no use el template url
  <span>{{numero}}</span>
  <button (click)="sumar()">+1</button>
  <button (click)="restar()">-1</button>
  <button (click)="acumular(10)">+10</button>
  <button (click)="sumarbase(-base)">{{-base}}</button>
  <!--restar la base, funciona solo colocando -->
  `
})
export class ContadorComponent {
  title:string = 'Contador App';
  numero:number = 10; //inicializo
  base:number = 5;
  sumar(){
    this.numero += 1;
  }
  restar(){
    this.numero -= 1;
  }
  acumular(valor:number){
    this.numero += valor ;
  }
  sumarbase(parametrobase:number){
    this.numero += parametrobase;
  }
}
