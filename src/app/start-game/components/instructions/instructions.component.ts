import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgForOf } from '@angular/common';
import { instructionsAnimation } from '../animations/games-animation';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss',
  animations:[
    instructionsAnimation
  ]
})
export class InstructionsComponent {

  instructions: string[] =[
    '1. Apasă pe butonul Start game pentru a începe jocul.',
    '2. Jocul conține 3 întrebări de cultură generală despre România.',
    '3. Aveți la dispoziție 10 secunde pentru a răspunde la o întrebare.'
  ]

}
