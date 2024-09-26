import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  constructor() { }
  treinos  = {
    braco:[
           {imagem:"https://i.pinimg.com/originals/d2/c1/40/d2c140a0c785db594687ea8c8747a723.gif", nome:"rosca alternada"},
           {imagem:"https://i.pinimg.com/originals/67/b9/7a/67b97ad79f373c490263d1dea8c31e38.gif", nome:"rosca direta"}
          ],
          costa:[
            {imagem:"https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-com-barra-no-pulley-1.gif", nome:"Pulley Frente"},
            {imagem:"https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-bent-over-row.gif", nome:"remada"}
           ],
           peito:[
            {imagem:"https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif", nome:"supino reto"},
            {imagem:"https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/dumbbell-fly.gif", nome:"crucifixo"}
           ],
           perna:[
            {imagem:"https://grandeatleta.com.br/wp-content/uploads/2018/05/execucao-exercicio-agachamento.gif", nome:"agachamento"},
            {imagem:"https://alcateiademonstros.com.br/wp-content/uploads/2022/09/Levantamento-terra-romeno.gif", nome:"Levantamento terra"}
           ],
  }

  ngOnInit() {
  }

}
