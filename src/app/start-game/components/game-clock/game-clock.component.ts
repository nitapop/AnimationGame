import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { finalize, map, Observable, takeWhile, timer } from 'rxjs';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-game-clock',
  standalone: true,
  imports: [
    NgClass,
    NgIf, AsyncPipe
  ],
  templateUrl: './game-clock.component.html',
  styleUrl: './game-clock.component.scss'
})
export class GameClockComponent implements OnChanges {
  @Input() startTimer = false;
  @Output() timesUp = new EventEmitter();
  seconds = 0;
  even = true;
  timeRemaining$ = new Observable<number>();

  ngOnChanges() {
    if (this.startTimer) {
      this.seconds = 10;
      this.startSeconds();
    } else {
      this.seconds = 0;
    }
  }

  startSeconds() {
    this.timeRemaining$ = timer(0, 1000).pipe(
      map(n => {
        this.even = !this.even;
        return this.seconds - n;
      }),
      takeWhile(n => n >= 0),
      finalize(() => this.timesUp.emit())
    );

  }


}
