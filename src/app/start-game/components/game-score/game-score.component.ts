import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { QuestionInfo } from '../question/question.component';



@Component({
  selector: 'app-game-score',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './game-score.component.html',
  styleUrl: './game-score.component.scss'
})
export class GameScoreComponent implements OnChanges{
  @Input() question?: QuestionInfo | null;
  gameScoreImgs: string[] = ['/assets/svg/q-1.png', '/assets/svg/q-2.png', '/assets/svg/q-3.png']

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['question'] && this.question) {
      this.gameScoreImgs[this.question.id] = this.question.correctAnswer ? '/assets/svg/correct-icon.png' : '/assets/svg/wrong-icon.png'
    }
  }

}
