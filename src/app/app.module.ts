import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from './shared/services/api/interceptors';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { ComponentsModule } from './components/component.module';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SwiperModule } from 'swiper/angular';



@NgModule({
    declarations: [
     AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PagesModule,
        ComponentsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        HttpClientModule ,
        ToastrModule.forRoot(),
          SocialLoginModule,
          SwiperModule


    ],

    exports:[
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
                '400369971223-anh0lp4kt0ev45grsut0vl43g39sai9g.apps.googleusercontent.com'
              )
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('520251066029914')
            }
          ]
        } as SocialAuthServiceConfig,
      },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: NZ_I18N, useValue: en_US }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
