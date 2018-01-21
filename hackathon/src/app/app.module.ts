import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

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
import { HackathonStoreModule } from './store/hackathon.store.module';
import { startupServiceFactory } from './store/services/startup.service';
import { CmsStateService } from './store/services/cms-state.service';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

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
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
    HackathonStoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CmsStateService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [CmsStateService],
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
