import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.css']
})
export class EditarMarcaComponent {

  cat = new Marca("");

  idMarca: number | undefined;
  nameMarca: string = "";
  createdDate: string = "";
  addressForm = this.fb.group({
    nameMarca: [null, Validators.required],
  });

  constructor(private rutaActiva: ActivatedRoute, private fb: FormBuilder, private categoriaService: MarcaService, private router: Router) {
    this.idMarca = this.rutaActiva.snapshot.params.id
    this.nameMarca = this.rutaActiva.snapshot.params.name
    this.createdDate = this.rutaActiva.snapshot.params.create
  }

  onSubmit(): void {
    this.cat.idMarca = this.idMarca;
    this.cat.nameMarca = this.nameMarca;
    this.cat.createdDate = this.createdDate;
    console.log(this.cat)
    this.categoriaService.editar(this.cat).subscribe(data => {
      if (true === data) {
        this.nameMarca = ""
        this.router.navigateByUrl("refresh/marca");
      }
    })
  }

  cancel() {
    this.router.navigateByUrl("listar-marcas");
  }

}
