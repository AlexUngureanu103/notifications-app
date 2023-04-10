import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes:Routes = [
  {path : "add", redirectTo: '/add/-1', pathMatch: 'full'},
  {path : "add/:id", component:AddAnnouncementFormComponent},
  {path: '', component: HomeComponent, pathMatch:'full'},
  //{ path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
