import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaComponent } from './pages/categoria/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './pages/categoria/eliminar-categoria/eliminar-categoria.component';
import { ListarCategoriasComponent } from './pages/categoria/listar-categorias/listar-categorias.component';
import { RegistrarCategoriaComponent } from './pages/categoria/registrar-categoria/registrar-categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditarMarcaComponent } from './pages/marca/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './pages/marca/eliminar-marca/eliminar-marca.component';
import { ListarMarcasComponent } from './pages/marca/listar-marcas/listar-marcas.component';
import { RegistrarMarcaComponent } from './pages/marca/registrar-marca/registrar-marca.component';
import { RefreshComponent } from './pages/refresh/refresh.component';

const routes: Routes = [
  { path: 'registrar-categoria', component: RegistrarCategoriaComponent },
  { path: 'listar-categorias', component: ListarCategoriasComponent },
  { path: 'eliminar-categoria/:id/:name', component: EliminarCategoriaComponent },
  { path: 'editar-categoria/:id/:name/:create', component: EditarCategoriaComponent },

  { path: 'registrar-marca', component: RegistrarMarcaComponent },
  { path: 'listar-marcas', component: ListarMarcasComponent },
  { path: 'eliminar-marca/:id/:name', component: EliminarMarcaComponent },
  { path: 'editar-marca/:id/:name/:create', component: EditarMarcaComponent },

  { path: 'refresh/:origen', component: RefreshComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
