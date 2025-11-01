import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { LoginPage } from './pages/login-page/login-page';
import { FormField } from './molecules/form-field/form-field';
import { ButtonOptions } from './molecules/button-options/button-options';
import { LoginCard } from './organisms/login-card/login-card';
import { LoginPageTemplate } from './templates/login-page-template/login-page-template';


@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    Label,
    Icon,
    DesignShowcase,
    FormField,
    ButtonOptions,
    LoginCard,
    LoginPageTemplate,
    LoginPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    Label,
    Icon,
    DesignShowcase,
    LoginPage,
    FormField,
    ButtonOptions,
    LoginCard,
    LoginPageTemplate
  ]
})
export class AtomicModule { }