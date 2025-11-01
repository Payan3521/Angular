import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignShowcase } from './atomic/pages/design-showcase/design-showcase';
import { LoginPage } from './atomic/pages/login-page/login-page';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
