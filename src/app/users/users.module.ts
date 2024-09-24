import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'





@NgModule({
  declarations: [
    UserFormComponent,
    UsersDashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports : [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
