import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'rules', component: RulesComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
