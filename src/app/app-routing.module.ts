import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren:()=>import('./modules/home/home.module').then(x=>x.HomeModule) },
  { path: 'shop', loadChildren: ()=>import('./modules/shop/shop.module').then(x=>x.ShopModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
