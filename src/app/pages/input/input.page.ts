import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario: Usuario;
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z0-9!?-]{8,12}')]]
    });
  }
  onSubmit() {
    console.log(this.formulario);
  }
}

interface Usuario {
  nombre: string;
  password: string;
  email: string;
}
