import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignShowcase } from './atomic/pages/design-showcase/design-showcase';
import { LoginPage } from './atomic/pages/login-page/login-page';

const routes: Routes = [
  { path: 'design-showcase', component: DesignShowcase },
  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
