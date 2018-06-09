import { Component, OnInit} from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Getusersresults } from '../../interfaces/getusersresults';

@Component({
  selector: 'myapp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  userInformation;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((response : Getusersresults) => {
        this.users = response.results;
      })
  }
  showUser(username){
    this.userInformation = {
      'firstName': username.name.first,
      'lastName': username.name.last,
      'email': username.email,
      'gender': username.gender,
      'picture': username.picture
    }
    this.usersService.user = this.userInformation
  }
}
