import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu ={
    logo:'https://cdn4.iconfinder.com/data/icons/sport-flat-1/512/muscles-256.png',
    items:[
      {icone:'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/home-256.png', texto:'inicio' link},
      {icone:'https://cdn4.iconfinder.com/data/icons/buno-support/32/__info_information_about-256.png', texto:'sobre'},
      {icone:'https://cdn1.iconfinder.com/data/icons/think-creative-1/24/00_image-media-photo-galery-256.png', texto:'galeria'},
      {icone:'https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/006_-_Call-64.png', texto:'contato'},
    ]
  }
  constructor() { }

  ngOnInit() {}

}
