import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Categoria>;
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  data: Categoria[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nameCategoria', 'createdDate', 'edit', 'delete'];

  constructor(private categoriaService: CategoriaService, private router: Router) {

  }
  ngOnInit(): void {
    this.categoriaService.listar().subscribe(d => {
      this.data = d.sort((a, b) => {
        var aa = new Date(a.createdDate);
        var bb = new Date(b.createdDate);
        return aa > bb ? -1 : 1;
      });
      this.dataSource = new MatTableDataSource(d);
      console.log(d);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  goRegister() {
    this.router.navigateByUrl("registrar-categoria")
  }

  formatDate(date: string): string {
    var newDate = new Date(date); // had to remove the colon (:) after the T in order to make it work
    var day = newDate.getDate();
    var monthIndex = newDate.getMonth();
    var year = newDate.getFullYear().toString().substring(2, 4);
    var minutes = "00".concat(newDate.getMinutes().toString());
    var newminutes = minutes.substring(minutes.length - 2, minutes.length)
    var hours = "00".concat(newDate.getHours().toString());
    var newhoras = hours.substring(hours.length - 2, hours.length)
    var myFormattedDate = day + "-" + (monthIndex + 1) + "-" + year + " " + newhoras + ":" + newminutes;
    return myFormattedDate;
  }
}
