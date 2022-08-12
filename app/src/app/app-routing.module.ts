import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteEditDialogComponent } from './clientes/pages/cliente-edit-dialog/cliente-edit-dialog.component';
import { ClienteNuevoComponent } from './clientes/pages/cliente-nuevo/cliente-nuevo.component';
import { ClientesComponent } from './clientes/pages/clientes/clientes.component';
import { RoutesGuard } from './routes.guard';

const routes: Routes = [
  {
    path:'' , pathMatch:'full' , redirectTo:'clientes'
  },
  {
    path:'clientes',
    loadChildren:()=> import('./clientes/clientes.module').then(m=>m.ClientesModule),
    canActivate:[RoutesGuard]
  },
  {
    path:'productos',
    loadChildren:()=> import('./productos/productos.module').then(m=>m.ProductosModule),
    canActivate:[RoutesGuard]
  } ,
  {
    path:'seguridad',
    loadChildren:()=> import('./seguridad/seguridad.module').then(m=>m.SeguridadModule),
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
