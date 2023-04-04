import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { ByAuthorPipe } from './by-author.pipe';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import  {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    ByAuthorPipe,
    AddAnnouncementFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
