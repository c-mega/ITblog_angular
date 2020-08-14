import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private appService: AppService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
      texto: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    }
    );
  }

  ngOnInit(): void {
  }

  async onSubmit() { //Esto va a agregar el post y a navegar a la ruta donde se pintan.
    console.log(this.formulario.value);
    const response = await this.appService.agregarPost(this.formulario.value);
    console.log(response);
    this.router.navigate(['/blog']);
  }
}
