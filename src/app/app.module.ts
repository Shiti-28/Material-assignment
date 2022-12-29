import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import{MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import{MatInputModule} from'@angular/material/input';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
