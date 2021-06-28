import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './pages/home/home.component';
import { ListarCategoriasComponent } from './pages/categoria/listar-categorias/listar-categorias.component';
import { RegistrarCategoriaComponent } from './pages/categoria/registrar-categoria/registrar-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarCategoriaComponent } from './pages/categoria/editar-categoria/editar-categoria.component';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { EditarMarcaComponent } from './pages/marca/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './pages/marca/eliminar-marca/eliminar-marca.component';
import { ListarMarcasComponent } from './pages/marca/listar-marcas/listar-marcas.component';
import { RegistrarMarcaComponent } from './pages/marca/registrar-marca/registrar-marca.component';
import { EliminarCategoriaComponent } from './pages/categoria/eliminar-categoria/eliminar-categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarCategoriasComponent,
    RegistrarCategoriaComponent,
    EditarCategoriaComponent,
    RefreshComponent,
    EditarMarcaComponent,
    EliminarMarcaComponent,
    ListarMarcasComponent,
    RegistrarMarcaComponent,
    EliminarCategoriaComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
