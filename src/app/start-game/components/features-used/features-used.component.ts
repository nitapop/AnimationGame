import { Component } from '@angular/core';
import { featuresAnimation } from '../animations/games-animation';
import { NgForOf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-features-used',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent
  ],
  templateUrl: './features-used.component.html',
  styleUrl: './features-used.component.scss',
  animations: [
    featuresAnimation
  ]
})
export class FeaturesUsedComponent {
  functionsList: string[] = ['query()', 'stagger()', 'group()', 'sequence()', 'useAnimation()'];
  featuresList: string[] = ['Triggers and State', 'Transitions', 'The void state', 'Keyframes for animations', 'Animation callbacks'];

}
