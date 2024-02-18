import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { homeButtonAnimation } from '../animations/games-animation';
import { RouterLink } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    NgClass,
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    homeButtonAnimation
  ]
})
export class HeaderComponent {

  @Input() text? = 'ROMÂNIA';
  @Input() textSize = '150px';
  @Input() imageUrl = '/assets/svg/sat.png';
  hoverState='none';

}
