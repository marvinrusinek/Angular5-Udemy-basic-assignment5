import { Component, OnInit } from '@angular/core';

import { UsersService } from "./services/users.service";
import { CounterService } from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
