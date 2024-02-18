import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { counterAnimation, endGameAnimation, pauseAnimation } from '../animations/games-animation';
import { BehaviorSubject } from 'rxjs';
import { GameClockComponent } from '../game-clock/game-clock.component';
import { QuestionComponent, QuestionInfo } from '../question/question.component';
import { GameScoreComponent } from '../game-score/game-score.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-play-game',
  standalone: true,
  imports: [
    NgClass,
    NgIf, HeaderComponent, AsyncPipe, DatePipe, GameClockComponent, QuestionComponent, GameScoreComponent
  ],
  templateUrl: './play-game.component.html',
  styleUrl: './play-game.component.scss',
  animations: [
    counterAnimation,
    pauseAnimation,
    endGameAnimation
  ]
})
export class PlayGameComponent implements OnInit {
  // wish of success
  private _wishSuccessTimeLeft$ = new BehaviorSubject(3);
  wishSuccessTimeLeft$ = this._wishSuccessTimeLeft$.asObservable();
  successTextState = 'none';
  wishSuccessInterval: any;

  //questions
  startQuestionTimer = false;
  questionIndex = 0;
  questions: QuestionInfo[] = [
    {
      id: 0,
      options: ['Vlad Călugărul', 'Mircea cel Bătrân', 'Vlad Dracul'],
      description: 'Vlad Țepeș a fost nepotul lui:',
      answer: 'Mircea cel Bătrân',
      state: 'none'
    } as QuestionInfo,
    {
      id: 1,
      options: ['Putna', 'Bârsana', 'Săpânța'],
      description: 'Cea mai înaltă mănăstire, de 78 m, se află în:',
      answer: 'Săpânța',
      state: 'none'
    } as QuestionInfo,
    {
      id: 2,
      options: ['9', '10', '7'],
      description: 'Care este numărul de niveluri atât la suprafață cât și subterane ale Palatului Parlamentului ?',
      answer: '9',
      state: 'none'
    } as QuestionInfo
  ];

  disableAnswerBtn = false;
  private _questionSolved$ = new BehaviorSubject<QuestionInfo | null>(null);
  questionSolved$ = this._questionSolved$.asObservable();

  //pause screen
  pauseScreenState = 'active';
  endGameState='none';
  message = 'Success!';

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.startWishSuccessTimer();
  }

  startWishSuccessTimer() {
    this.wishSuccessInterval = setInterval(() => {
      if (this._wishSuccessTimeLeft$.value > 0) {
        this._wishSuccessTimeLeft$.next(this._wishSuccessTimeLeft$.value - 1);
      } else {
        this._wishSuccessTimeLeft$.next(-1);
        this.successTextState = 'display';
        clearInterval(this.wishSuccessInterval);
      }
    }, 900);
  }

  pauseAnimationDone(): void {
    if(this.endGameState === 'end') {
      this.router.navigate(['../'], { relativeTo: this.route }).then();
    } else {
      this.pauseScreenState = 'none';
      this.startQuestionTimer = true;
    }
  }

  correctAnswerEvent(question: QuestionInfo): void {
    this.questions[question.id] = question;
    this._questionSolved$.next(question);
    this.handleNextQuestionScreen();
    this.startQuestionTimer = false;
    this.disableAnswerBtn = true;
  }

  timesUp(): void {
    if(this.questions[this.questionIndex].correctAnswer === undefined) {
      this.disableAnswerBtn = true;
      this._questionSolved$.next(this.questions[this.questionIndex]);
      this.handleNextQuestionScreen();
      this.startQuestionTimer = false;
    }
  }

  handleNextQuestionScreen(): void {
    setTimeout(() => {
      this.nextQuestion();
    }, 1000);
  }

  nextQuestion(): void {
    if (this.questionIndex < this.questions.length -1 ) {
      this.questionIndex = this.questionIndex + 1;
      this.disableAnswerBtn = false;
      this.startQuestionTimer = true;
    } else {
      this.endGameState = 'end';
    }
  }
  onEndGame(): void {
    const correctAnswers = this.questions.filter(question => question.correctAnswer).length
    this.message = `Scor: ${correctAnswers} / ${this.questions.length}`;
    this.pauseScreenState = 'active';
  }

}
