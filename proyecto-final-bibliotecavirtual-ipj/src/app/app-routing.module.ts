import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
  path: 'add-libro',
  loadChildren: () => import('./add-libro/add-libro.module').then( m => m.AddLibroPageModule)
},
{
  path: 'consultar-libro',
  loadChildren: () => import('./consultar-libro/consultar-libro.module').then( m => m.ConsultarLibroPageModule)
},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
{
  path: 'mi-cuenta',
  loadChildren: () => import('./mi-cuenta/mi-cuenta.module').then( m => m.MiCuentaPageModule)
},
  {
    path: 'eliminar-libro',
    loadChildren: () => import('./eliminar-libro/eliminar-libro.module').then( m => m.EliminarLibroPageModule)
  },
  {
    path: 'prestamo-alta',
    loadChildren: () => import('./prestamo-alta/prestamo-alta.module').then( m => m.PrestamoAltaPageModule)
  },
  {
    path: 'prestamo-consultar',
    loadChildren: () => import('./prestamo-consultar/prestamo-consultar.module').then( m => m.PrestamoConsultarPageModule)
  },
  {
    path: 'prestamo-eliminar',
    loadChildren: () => import('./prestamo-eliminar/prestamo-eliminar.module').then( m => m.PrestamoEliminarPageModule)
  },
  {
    path: 'prestamo-modificar',
    loadChildren: () => import('./prestamo-modificar/prestamo-modificar.module').then( m => m.PrestamoModificarPageModule)
  },
  {
    path: 'modificar-libro',
    loadChildren: () => import('./modificar-libro/modificar-libro.module').then( m => m.ModificarLibroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'usuario-alta',
    loadChildren: () => import('./usuario-alta/usuario-alta.module').then( m => m.UsuarioAltaPageModule)
  },
  {
    path: 'usuario-consultar',
    loadChildren: () => import('./usuario-consultar/usuario-consultar.module').then( m => m.UsuarioConsultarPageModule)
  },
  {
    path: 'usuario-eliminar',
    loadChildren: () => import('./usuario-eliminar/usuario-eliminar.module').then( m => m.UsuarioEliminarPageModule)
  },
  {
    path: 'usuario-modificar',
    loadChildren: () => import('./usuario-modificar/usuario-modificar.module').then( m => m.UsuarioModificarPageModule)
  },
  {
    path: 'modificar-libro',
    loadChildren: () => import('./modificar-libro/modificar-libro.module').then( m => m.ModificarLibroPageModule)
  },
  {
    path: 'modificar-libro',
    loadChildren: () => import('./modificar-libro/modificar-libro.module').then( m => m.ModificarLibroPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'mi-cuenta',
  //   loadChildren: () => import ('./add-libro/add-libro.module').then(m => m.AddLibroPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
