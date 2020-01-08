import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servises/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: Boolean;  

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }
  
  ngOnInit() { }

  signIn(credentials) {
    this.authService.login(credentials) 
      .subscribe(res => {
        if(res) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/home']);
        }
        else this.invalidLogin = true;
      });
  }

}
