import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './hackathon/home/home.component';
import { IdeasComponent } from './hackathon/ideas/ideas.component';
import { NewsComponent } from './hackathon/news/news.component';
import { HackersComponent } from './hackathon/hackers/hackers.component';
import { AdminComponent } from './hackathon/admin/admin.component';
import { AppRoutingModule } from './hackathon/app.routing.module';
import { LoginComponent } from './hackathon/login/login.component';
import { SignInComponent } from './hackathon/login/sign-in/sign-in.component';
import { SignUpComponent } from './hackathon/login/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    IdeasComponent,
    NewsComponent,
    HackersComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
