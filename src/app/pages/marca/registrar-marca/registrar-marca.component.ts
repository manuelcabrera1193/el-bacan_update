import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.css']
})
export class RegistrarMarcaComponent {
  nameMarca: string = ""
  addressForm = this.fb.group({
    nameMarca: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private categoriaService: MarcaService, private router: Router) { }


  onSubmit(): void {
    this.nameMarca = this.nameMarca
    console.log(new Marca(this.nameMarca))
    this.categoriaService.registrar(new Marca(this.nameMarca)).subscribe(data => {
      if (true === data) {
        this.nameMarca = ""
        this.router.navigateByUrl("listar-marcas");
      }
    })
  }
  cancel() {
    this.router.navigateByUrl("listar-marcas");
  }
}
