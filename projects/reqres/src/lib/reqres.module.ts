import { NgModule } from '@angular/core';
import { ReqresComponent } from './reqres.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ReqresComponent, DeleteMeComponent, UsersComponent],
  exports: [UsersComponent]
})
export class ReqresModule { }
