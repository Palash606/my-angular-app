import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userData: any[] = [];

  constructor(private userService: UserService) {} // inejected user service

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }

  onDelete(userId: number) {
    this.userData = this.userData.filter((u) => u.id !== userId);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
