import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import {coursesComponent } from './header2/header2.component';
import { courses } from './directives/header3.component';
import { bodycomponent } from './body1/body1.component';
import { FooterComponent } from './footer/footer.component';
import { Body3Component } from './body3/body3.component';
import { course } from './course.service';

import { DrivenComponent } from './driven/driven.component';
import { Header6Component } from './header6/header6.component';
import { Body6Component } from './body6/body6.component';
import { Footer6Component } from './footer6/footer6.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//import { FirstappComponent } from './firstapp/firstapp.component';

@NgModule({
  declarations: [
    AppComponent,
    //  coursesComponent,
    FooterComponent,
    bodycomponent,
    courses,

    Body3Component,
    DrivenComponent,
    Header6Component,
    Body6Component,
    Footer6Component,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
   

    //FirstappComponents
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([{
      path: 'about',
      component: AboutComponent

    }, {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'login',
      component: LoginComponent
    } ]),
    HttpModule
  ],
  providers: [course],
  bootstrap: [AppComponent]
})
export class AppModule { }
