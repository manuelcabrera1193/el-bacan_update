import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent implements OnInit {


  idCategoria: string = ""
  nameCategoria: string = ""
  constructor(private rutaActiva: ActivatedRoute, private categoriaService: CategoriaService, private router: Router) {
    this.idCategoria = this.rutaActiva.snapshot.params.id
    this.nameCategoria = this.rutaActiva.snapshot.params.name
  }

  ngOnInit(): void {
  }


  eliminar() {
    this.categoriaService.eliminar(parseInt(this.idCategoria)).subscribe(http => {
      console.log(http);
      this.router.navigateByUrl("refresh/categoria")
    })
  }
  cancel() {
    this.router.navigateByUrl("listar-categorias");
  }

}
