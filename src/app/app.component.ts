import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  Students!:FormGroup;

  namepattern!:"^[a-zA-Z ]{2,20}$";
  mobilepattern!:"/^([+]\d{2})?\d{10}$/";
  emailpattern!:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}";
  passwordpattern!:"^[a-zA-Z0-9_.-]*$";


  constructor(private fb:FormBuilder,private s:ServicesService ){}

  ngOnInit(): void {

    this.Students=this.fb.group({
     
      name:['',[Validators.required,Validators.pattern(this.namepattern),Validators.minLength(6),Validators.maxLength(32)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      password:['',Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passwordpattern)],     
      dob: [''],
      skills:[''],
      gender:['']
    })
  }

  //submit form
  submit(){

    if(this.Students.valid){
      this.s.postData(this.Students.value).subscribe();
    }

    // if(this.Students.valid)
    // {
    // this.s.postData(this.Students.value).subscribe();
    // }
    window.location.reload();


  }

  
  title = 'Materalassign';

}
