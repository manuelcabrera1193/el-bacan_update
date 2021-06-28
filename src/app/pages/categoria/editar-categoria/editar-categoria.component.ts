import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  cat = new Categoria("");

  idCategoria: number | undefined;
  nameCategoria: string = "";
  createdDate: string = "";
  addressForm = this.fb.group({
    nameCategoria: [null, Validators.required],
  });

  constructor(private rutaActiva: ActivatedRoute, private fb: FormBuilder, private categoriaService: CategoriaService, private router: Router) {
    this.idCategoria = this.rutaActiva.snapshot.params.id
    this.nameCategoria = this.rutaActiva.snapshot.params.name
    this.createdDate = this.rutaActiva.snapshot.params.create
  }

  onSubmit(): void {
    this.cat.idCategoria = this.idCategoria;
    this.cat.nameCategoria = this.nameCategoria;
    this.cat.createdDate = this.createdDate;
    console.log(this.cat)
    this.categoriaService.editar(this.cat).subscribe(data => {
      if (true === data) {
        this.nameCategoria = ""
        this.router.navigateByUrl("refresh/categoria");
      }
    })
  }

  cancel() {
    this.router.navigateByUrl("listar-categorias");
  }
}
