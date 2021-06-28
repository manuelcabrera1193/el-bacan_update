import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.css']
})
export class EliminarMarcaComponent implements OnInit {

  idMarca: string = ""
  nameMarca: string = ""
  constructor(private rutaActiva: ActivatedRoute, private categoriaService: MarcaService, private router: Router) {
    this.idMarca = this.rutaActiva.snapshot.params.id
    this.nameMarca = this.rutaActiva.snapshot.params.name
  }

  ngOnInit(): void {
  }


  eliminar() {
    this.categoriaService.eliminar(parseInt(this.idMarca)).subscribe(http => {
      console.log(http);
      this.router.navigateByUrl("refresh/marca")
    })
  }
  cancel() {
    this.router.navigateByUrl("listar-marcas");
  }
}
