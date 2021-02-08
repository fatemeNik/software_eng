import { TournamentComponent } from './components/tournament/tournament.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table-palyer/table.component';


export const routes: Routes = [
  //** means whatever you enter/
  // 'anything' you have to put here must type at the end of url.
  {path:'', component: MainPageComponent},
  {path:'login', component: LoginComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'tournament', component: TournamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
