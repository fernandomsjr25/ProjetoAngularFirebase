import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alunos = [];
  aluno:any = {
    nome: null
  }

  constructor(
    public crudService : CrudService

  ){ }

  cadastrar(){
    this.crudService.insert(this.aluno,'aluno');
    this.getAlunos();
  }
  getAlunos(){
    this.crudService.fetchAll('aluno')
    .then(response => {
      console.log(response);
      this.alunos= response; 
    })
  }
}
