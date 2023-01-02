import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialassign2';
  dialog: any;

  Constructor (dialog:MatDialog) {}
  
  openDialog() {

    this.dialog.open(CEOExample,{
      width: '250px',
      height:'250px'
    });
  }

  openDialog2() {

    this.dialog.open(ContactExample,{
      width: '250px',
      height:'250px'
    });
  }

  onclick(){

    alert("Login Succesfull");
  }
}
  


@Component({
  selector: 'CEOExample',
  templateUrl: 'ceo.html',
})

export class CEOExample {}

@Component({
  selector: 'ContactExample',
  templateUrl: 'contact.html',
})

export class ContactExample {}

  

  



