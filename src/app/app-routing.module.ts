import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {GameWindowComponent} from './game-window/game-window.component';
import {MoveWindowComponent} from './move-window/move-window.component';
import {VoteWindowComponent} from './vote-window/vote-window.component';
import {IntroComponent} from './intro/intro.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  // { path: 'game', component: GameWindowComponent, children:
  //   [
  //     { path : '', component: IntroComponent },
  //     { path : 'move', component: MoveWindowComponent },
  //     { path : 'vote', component: VoteWindowComponent }
  //   ]
  // }
  { path: 'game', component: GameWindowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
