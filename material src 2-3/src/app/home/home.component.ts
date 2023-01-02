import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {

  name: string;

  color: ThemePalette;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  sports:string[]=['cricket','football','hockey','snooker'];

  colors: ChipColor[] =

    [

      { name: 'Acting', color: undefined },

      { name: 'Dancing', color: 'primary' },

      { name: 'Swimming', color: 'warn' },

      { name: 'Painting', color: 'accent' },

    ];
}
