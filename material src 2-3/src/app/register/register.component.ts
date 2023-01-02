import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Registers } from '../model/registers';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(private fb: FormBuilder) { }
  rform!:FormGroup;

  ngOnInit(): void {
    this.rform = this.fb.group({
      fullname: [''],
      email: [''],
      username: [''],
      password: [''],
      gender: [''],
      dob: [''],
      mobile: [''],
      skills: [''],


    })
  }


  clk(){
    alert("registered successfully")
  }

  
}
