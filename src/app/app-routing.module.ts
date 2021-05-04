import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaisComponent } from './paises/pages/pais/pais.component';
import { RegionComponent } from './paises/pages/region/region.component';
import { CapitalComponent } from './paises/pages/capital/capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  { // Home
    path: '',
    component: PaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'capital',
    component: CapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  { //Ruta cuando el path no es uno valido
    path: '**',
    redirectTo: '' // Home
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}