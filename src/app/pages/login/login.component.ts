import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../../shared/models/user.model';
import { LoginService } from '../../shared/services/api/login.service';
import { SocialUser  } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SocialAuthService } from "angularx-social-login";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




    data : Date = new Date();
    focus;
    focus1;

    user: User = new User();

    users: SocialUser;

    username;
    userPassword;
    redirectUrl: string;
    redirectMessage:string;
    busyLoggingIn: boolean = false;
    isRememberMeChecked: boolean = false;

    messageError:string;
    message:string;
    registerForm: FormGroup;

    constructor(private loginService: LoginService,
        private spinner: NgxSpinnerService ,
        private router: Router,
        private route: ActivatedRoute,
        private authService: SocialAuthService ,
        private toastr:ToastrService
        ) {



         }

    ngOnInit() {




         // form validation
         this.registerForm = new FormGroup({
          'password': new FormControl(null, [Validators.minLength(2), Validators.required, Validators.pattern(/[a-zA-Z 1-9]/)]),
          'email': new FormControl(null, [Validators.email, Validators.required]),
        });
        this.user = new User();

        this.authService.authState.subscribe((user) => {
          this.users = user;
        });
    }

    login() {
        this.busyLoggingIn = true;
          this.spinner.show();
        this.loginService.login(this.user).subscribe(
          res => {
            this.router.navigate(['/shoping/home']);

this.toastr.success('شكرا لك .. مرحبا بك في خليها علينا ')
            }  );
          this.spinner.hide();


          setTimeout(() => {
            window.location.reload();

          }, 3000);

      }

      NavigterTocreateAccount(){
        this.router.navigate(['/shoping/regsister']);

      }

      signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x=>  {
          // this.router.navigate(['/shoping/home']);

          setTimeout(()=>{
            // window.location.reload();

            this.toastr.success('شكرا لك .. مرحبا بك في خليها علينا ')

          } , 1000)

         localStorage.setItem('token' ,(Object.values(x)[7]) )

this.loginService.loginwithgoogle().subscribe()

          });


      }

      signInWithFB(): void {

        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x =>
          {
            this.router.navigate(['/shoping/home']);

          setTimeout(()=>{
            // window.location.reload();


          } , 1000)
          this.toastr.success('شكرا لك .. مرحبا بك في خليها علينا ')
          localStorage.setItem('token' ,(Object.values(x)[6]) )

          console.log(Object.values(x))});








      }

}

