import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '', component: HomePage
  },
  {
    path: 'home', component: HomePage
  },
  {
    path: 'map', component: MapComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
