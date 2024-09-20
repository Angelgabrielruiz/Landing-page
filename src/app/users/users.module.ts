import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';




@NgModule({
  declarations: [
    UserFormComponent,
    UsersDashboardComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class UsersModule { }
