import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Design1Component } from './3dmodels/design1/design1.component';

export const routes: Routes = [
  // {path:'', component:Design1Component}  

  {path:'', component:HomeComponent}  
   
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { 

 
}
