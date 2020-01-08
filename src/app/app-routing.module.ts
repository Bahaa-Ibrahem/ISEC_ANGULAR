import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './viewComponents/notfound/notfound.component';
import { AuthGuard } from './servises/auth-guard.service';
import { NoAccessComponent } from './viewComponents/no-access/no-access.component';
import { AdminAuthGuard } from './servises/admin-auth-guard.service';
import { LoginComponent } from './viewComponents/login/login.component';
import { SignupFormComponent } from './viewComponents/signup-form/signup-form.component';
import { WeatherComponent } from './viewComponents/weather/weather.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SignupFormComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'no-access', component: NoAccessComponent},
  {path: '', component: WeatherComponent, pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
