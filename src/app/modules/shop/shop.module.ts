import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShopComponent } from './pages/main-shop/main-shop.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: MainShopComponent}
]

@NgModule({
  declarations: [
    MainShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
