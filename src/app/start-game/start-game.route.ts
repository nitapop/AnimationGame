import { Route } from '@angular/router';
import { StartGameComponent } from './start-game.component';
import { DashboardComponent, InstructionsComponent, PlayGameComponent } from './components';
import { FeaturesUsedComponent } from './components/features-used/features-used.component';

export const GAMES_ROUTES: Route[] = [
  {
    path: '',
    component: StartGameComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'play',
        component: PlayGameComponent
      },
      {
        path: 'instructions',
        component: InstructionsComponent
      },{
        path: 'features',
        component: FeaturesUsedComponent
      }
    ]
  }
];