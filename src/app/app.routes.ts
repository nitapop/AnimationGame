import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start-game'
  },
  {
    path: 'start-game',
    loadChildren: () => import('./start-game/start-game.module').then(m => m.StartGameModule)
  }
];
