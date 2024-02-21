import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor( private userService: UserService, private router: Router){

  }

  onClick() {
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch();
  }

}
