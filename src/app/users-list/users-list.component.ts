import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user-list.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public usersList = [];

    constructor(userListService: UserListService) {

        this.usersList = userListService.usersList;

    }

    ngOnInit(): void {
    }


}
