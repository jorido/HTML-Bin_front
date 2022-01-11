import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routingComponents } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedDBService } from './shared-db.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { HtmlViewerDirective } from './html-viewer.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    LoginComponent,
    GuestComponent,
    DashboardComponent,
    UserEditorComponent,
    HtmlViewerDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '241458476085-fb50rshg88jkgk9p356cnr8231lb211n.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    },
    SharedDBService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
