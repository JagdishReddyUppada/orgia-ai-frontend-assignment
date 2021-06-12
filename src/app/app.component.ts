import { Component } from '@angular/core';
import { User } from './models/User.model';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  usersData!: User[];

  constructor(private userService: UserDataService) {
          this.userService.getUsersData().subscribe(
            (usersResponse) => {
              this.usersData = usersResponse;
            },
            () => {
              console.log('Not able to get users data.');
            }
          );
        }
         
}
