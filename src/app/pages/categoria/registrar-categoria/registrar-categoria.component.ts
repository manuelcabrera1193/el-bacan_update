import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {
  nameCategoria: string = ""
  addressForm = this.fb.group({
    nameCategoria: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService, private router: Router) { }


  onSubmit(): void {
    this.nameCategoria = this.nameCategoria
    console.log(new Categoria(this.nameCategoria))
    this.categoriaService.registrar(new Categoria(this.nameCategoria)).subscribe(data => {
      if (true === data) {
        this.nameCategoria = ""
        this.router.navigateByUrl("listar-categorias");
      }
    })
  }
  cancel() {
    this.router.navigateByUrl("listar-categorias");
  }
}
