import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user-list.service';
import { User } from '../user';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public usersList: User[];

    constructor(public userListService: UserListService) {

        this.usersList = this.userListService.getList();

    }

    ngOnInit(): void {
    }

    onSearch(value: string): void {
        this.usersList = this.userListService.findItem(value);
    }

    sortList(value: string): void {
        this.usersList = this.userListService.sortItem(value);
    }


}
