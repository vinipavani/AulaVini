import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-republica',
  templateUrl: './republica.page.html',
  styleUrls: ['./republica.page.scss'],
})
export class RepublicaPage implements OnInit {

  commentForm: FormGroup;
  editCommentForm: FormGroup;
  editMode = false;

  comentarios = [];

  constructor( public formbuilder: FormBuilder ) { 
    this.commentForm = this.formbuilder.group({
      mensagem: [null, [Validators.required, Validators.maxLength(140)]],
    });
    this.editCommentForm = this.formbuilder.group({
      mensagem: [null, [Validators.required, Validators.maxLength(140)]],
    });
  }

  ngOnInit() {
    this.comentarios = [{
      id: 1,
      username: 'Kujo Jotaro',
      mensagem: 'Oraoraoraoraoraoraororaoraoraoraoroaroarraoao!'
    },
    {
      id: 2,
      username: 'Josuke Higashikata',
      mensagem: 'Dorarararararararararararara!'
    },
    {
      id: 3,
      username: 'Joseph Joestar',
      mensagem: 'Oh my god!!!'
    },
    {
      id: 4,
      username: 'Giorno Giovanna',
      mensagem: 'Mudamudamudamudamudamudamuda!'
    }];
  }

  sendComment(form){
    console.log(form);
    console.log(form.value);
  }

  sendEditComment(form){
    console.log(form);
    console.log(form.value);
    this.editMode = false;
  }

  toggleEdit(id){
    this.editMode = true;
    console.log(id)
  }

  deleteComment(id){
    console.log('Mais que cancelado: ' + id);
  }

}
