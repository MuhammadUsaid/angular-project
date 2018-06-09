import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'myapp-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {
  user;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.user = this.usersService.user
  }

}
