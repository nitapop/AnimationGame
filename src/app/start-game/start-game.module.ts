import { RouterModule } from '@angular/router';
import { GAMES_ROUTES } from './start-game.route';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild([...GAMES_ROUTES])]
})
export class StartGameModule {

}