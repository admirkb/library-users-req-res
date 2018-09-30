import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../model/users';
import { ReqresService } from '../../public_api';

import { TheUsersService } from './the-users.service';

@Component({
  selector: 'rr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users;
  @Input() pageNumber: number;

  constructor(private reqresService: ReqresService,
    private theUsersService: TheUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.reqresService.getUsers(this.pageNumber).subscribe(arg => this.users = arg);
  }

  testClick() {


    this.theUsersService.alertMe("Admiral");
  }

}
