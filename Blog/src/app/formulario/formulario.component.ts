import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private appService: AppService) {
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

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.appService.agregarPost();
    console.log(response);
  }
}
