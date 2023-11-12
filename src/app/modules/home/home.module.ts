import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageSingleProductComponent } from './components/home-page-single-product/home-page-single-product.component';
import { HomePageMultipleProductsComponent } from './components/home-page-multiple-products/home-page-multiple-products.component';

const routes: Routes = [

  { path: '', component: MainHomeComponent }

];

@NgModule({
  declarations: [
    MainHomeComponent,
    HomePageSingleProductComponent,
    HomePageMultipleProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
