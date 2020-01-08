import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servises/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  invalidLogin: Boolean;  

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  signUp(credentials) {
    this.authService.singup(credentials) 
      .subscribe(res => {
        if(res) {
          this.router.navigate(['/login']);
        }
        else this.invalidLogin = true;
      });
  }

}
