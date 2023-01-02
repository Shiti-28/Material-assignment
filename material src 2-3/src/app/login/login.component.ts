import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Registers } from '../model/registers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  lform!:FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.lform = this.fb.group({
    
      username: [''],
      password: [''],
      


    })
  }

  onclick(){

    
    alert("Login Succesfull");
  }

}
