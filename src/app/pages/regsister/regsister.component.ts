import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../shared/services/swal.service';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/api/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-regsister',
  templateUrl: './regsister.component.html',
  styleUrls: ['./regsister.component.scss']
})
export class RegsisterComponent implements OnInit {


  user: User = new User();


  messageError: string;
  message: string;

  ErrorInputFirstName: boolean = false;
  ErrorInputLastName: boolean = false;
   ErrorInputEmail: boolean = false;
   ErrorInputPassword: boolean = false;
   ErrorInputPasswordValidation: boolean = false;
   ErrorPassword:string;
   ErrorEmail:string;
   ErrorPasswordConfirm:string;


   re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   registerForm: FormGroup;

  constructor(private swalService: SwalService,
    private userServices: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr:ToastrService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {


      // form validation
      this.registerForm = new FormGroup({
        'firstName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
        'lastName': new FormControl(null, [Validators.minLength(2), Validators.required ]),
        'password': new FormControl(null, [Validators.minLength(2), Validators.required, Validators.pattern(/[a-zA-Z 1-9]/)]),
        'confirmPassword': new FormControl(null, [Validators.minLength(2), Validators.required, Validators.pattern(/[a-zA-Z 1-9]/)]),

        'email': new FormControl(null, [Validators.email, Validators.required]),
      });

  }

  save() {

if (this.user.confirmPassword != this.user.password){
  this.toastr.error(' كلمة المرور غير متطابقة  ')
}


    this.userServices.create(this.user).subscribe(res => {
      setTimeout(()=>{
        this.router.navigate(['/shoping/login']);
this.toastr.success('شكرا لك ')
     } , 3000)
      //    if(Object.values(res)[4] == false) {
      //     this.spinner.hide();
      //     this.messageError= "This account is " + Object.values(res)[0]
      //  }
      //    else  {
      //      this.messageError= "Thanks  " + Object.values(res)[0]
      //       this.spinner.hide();
      //       this.cancel();
      //       setTimeout(()=>{
      //          this.router.navigate(['/shoping/home']);

      //       } , 3000)

      //     }
         }  );
      this.spinner.hide();
  }



}
