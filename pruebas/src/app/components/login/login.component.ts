import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  
  constructor(private userService: UserService, private router: Router){
    this.formLogin= new FormGroup ({
      email: new FormControl,
      password: new FormControl
   })
  }

  onSubmit(){
    console.log(this.formLogin.value);
    this.userService.login(this.formLogin.value)
    .then((response)=>{
      console.log(response);
      this.router.navigate(['/main/']);
    })
    .catch((error)=>console.log("error login email" + error))
  }
    

  onLoginGoogle() {
    this.userService.loginWithGoogle()
    .then(response=> {
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }

  onLoginX() {
    this.userService.loginWithX()
    .then(response=> {
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }

  onLoginGit() {
    this.userService.loginWithGit()
    .then(response=> {
      console.log(response);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }
}
