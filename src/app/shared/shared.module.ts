import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToastModule } from 'primeng/toast';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NotifyMessagesComponent } from './components/notify-messages/notify-messages.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    NotifyMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    KeyFilterModule,
    ToastModule,
    MenubarModule,
    AvatarModule,
    RippleModule,
    BadgeModule,
    PanelMenuModule
  ],
  providers: []
})
export class SharedModule { }
