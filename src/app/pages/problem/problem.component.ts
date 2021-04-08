import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../../shared/models/contactus.model';
import { SwalService } from '../../shared/services/swal.service';
import { NotificationService } from '../../shared/services/api/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {


  contact: ContactUs = new ContactUs();

  constructor(private swalService: SwalService,
    private contactusServices: NotificationService ,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.contactusServices.createProblem(this.contact).subscribe(res=> {
      this.toastr.success(' تم ارسال الشكوي للادارة  بنجاح .. شكرا لك ');

      this.cancel();
    })
  }

  cancel() {
    this.contact.firstName = "";
    this.contact.lastName = "";
    this.contact.email = "";
    this.contact.message ="";
    this.contact.phone ="";

    }


}
