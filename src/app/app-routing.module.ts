import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserEditorComponent } from './user-editor/user-editor.component';

const routes: Routes = [
  {path: 'guest', component: GuestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-editor', component: UserEditorComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'guest', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GuestComponent, LoginComponent, UserEditorComponent, PageNotFoundComponent, DashboardComponent];