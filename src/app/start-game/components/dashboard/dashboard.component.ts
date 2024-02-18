import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { buttonAnimation, scaleImages } from '../animations/games-animation';
import { NgClass, NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgClass, NgFor, HeaderComponent, MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    scaleImages,
    buttonAnimation
  ]
})
export class DashboardComponent implements OnInit {
  images = [0, 1, 2, 3];
  states: boolean[] = [];
  index = -1;
  animateTextStates : {[key in 'play' | 'instr' ]? : string} ={'play': 'ready','instr': 'ready'}


  ngOnInit(): void {
    this.resetImagesStates();
    this.animationStart();
  }

  onAnimateButtonTextDone(key: 'play' | 'instr'): void {
    this.animateTextStates[key] = 'ready';
  }

  resetImagesStates(): void {
    this.states = [];
    this.images.forEach(() => this.states.push(false));
  }

  animationStart() {
    setTimeout(() => {
      this.index = 0;
      this.states[0] = true;
    });
  }

  animationDone() {
    this.index++;
    if (this.index < this.states.length) {
      this.states[this.index] = true;
      if (this.index > 0) {
        this.states[this.index - 1] = false;
      } else {
        this.states[this.states.length] = false;
      }

    } else {
      this.states[this.index - 1] = false;
      this.resetImagesStates();
      setTimeout(() => {
        this.index = 0;
        this.states[0] = true;
      });
    }
  }
}
