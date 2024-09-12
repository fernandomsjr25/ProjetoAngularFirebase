import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-ver-detalhes',
  templateUrl: './ver-detalhes.page.html',
  styleUrls: ['./ver-detalhes.page.scss'],
})
export class VerDetalhesPage  {


pais:any;
tempo:any;

  constructor(
    private router:Router
  ) {
    console.log(history.state.codigo)
    this.getPaisDetalhes();
   }


   verDetalhes(pais:any){
    
    fetch(`https://restcountries.com/v3.1/alpha/${pais}`)
    .then(dados=> dados.json( )  )
    
    .then(dados=> {
      console.log(dados);
      this.pais = dados;
    })
    
    .catch(_=> {
    console.log(_)
    })
    
    .finally(()=>{
      console.log('finalizado!')
    })


    }


   

getPaisDetalhes(){

fetch(`https://restcountries.com/v3.1/alpha/${history.state.codigo}`)
.then(dados=> dados.json( )  )

.then(dados=> {
  console.log(dados);
  this.pais = dados;
})

.catch(_=> {
console.log(_)
})

.finally(()=>{
  console.log('finalizado!')
})

}

}
