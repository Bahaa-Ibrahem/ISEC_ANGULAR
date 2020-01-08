import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './viewComponents/navbar/navbar.component';
import { NotfoundComponent } from './viewComponents/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './servises/auth-guard.service';
import { AuthService } from './servises/auth.service';
import { NoAccessComponent } from './viewComponents/no-access/no-access.component';
import { AdminAuthGuard } from './servises/admin-auth-guard.service';
import { SignupFormComponent } from './viewComponents/signup-form/signup-form.component';
import { LoginComponent } from './viewComponents/login/login.component';
import { WeatherComponent } from './viewComponents/weather/weather.component';
import { DataService } from './servises/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    NoAccessComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    ],
  providers: [
    DataService,
    AuthGuard,
    AdminAuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
