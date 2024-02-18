import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AnimationGame';
}

//bootstrapApplication(AppComponent,{ providers: [{ provide: APP_INITIALIZER, useFactory: () => console.error('orice'), multi: true }]})