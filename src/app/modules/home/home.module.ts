import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: MainHomeComponent }

];

@NgModule({
  declarations: [
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
