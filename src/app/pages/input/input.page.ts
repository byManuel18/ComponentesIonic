import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Manuel';

  usuario = {
    password: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){
    console.log(this.usuario);
    console.log(formulario);


  }

}
