import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { questionsAnimation } from '../animations/games-animation';
import { MatIcon } from '@angular/material/icon';


export interface QuestionInfo {
  id: number
  description: string;
  answer: string;
  options: string[],
  correctAnswer: boolean;
  state: 'none' | 'displayed'
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    NgFor,
    RouterLink,
    MatIcon,
    NgIf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  animations: [
    questionsAnimation
  ]
})
export class QuestionComponent implements OnChanges {
  @Input() questionInfo?: QuestionInfo;
  @Input() disabledButton = false;
  @Output() correctAnswer = new EventEmitter<QuestionInfo>();
  response: string = '';
  showCorrectAnswer = false;

  ngOnChanges(changes: SimpleChanges): void {

    if(changes && changes['questionInfo']) {
      if (this.questionInfo) {
        this.response = '';
        this.showCorrectAnswer = false;
        setTimeout(() => {
          this.questionInfo!.state = 'displayed';
        }, 1000);

      }
    }
    if(changes && changes['disabledButton'] && !changes['disabledButton'].isFirstChange() && this.disabledButton) {
      this.showCorrectAnswer = true;
    }

  }

  checkAnswer(): void {
    this.showCorrectAnswer = true;
    this.questionInfo!.correctAnswer = this.response === this.questionInfo?.answer;
    this.correctAnswer.emit(this.questionInfo);
  }


}
