import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {

  origen: string = ""
  constructor(private router: Router, private rutaActiva: ActivatedRoute) { 
    this.origen = this.rutaActiva.snapshot.params.origen
  }

  ngOnInit(): void {
    switch (this.origen) {
      case "home": {
        this.router.navigateByUrl("")
        break;
      }
      case "categoria": {
        this.router.navigateByUrl("listar-categorias")
        break;
      }
      case "marca": {
        this.router.navigateByUrl("listar-marcas")
        break;
      }
      default: {
        this.router.navigateByUrl("")
        break;
      }
    }
  }

}
