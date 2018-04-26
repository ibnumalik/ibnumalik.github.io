import { IAuthService } from './../../../auth/auth';
import { AuthService } from './../../../auth/services/auth.service';
import './app.component.scss';

export class App implements ng.IComponentOptions {
  static NAME:string = 'app';
  template;
  controller;

  constructor() {
    this.template = require('./app.component.html');
    this.controller = AppController;
  }
}

export class AppController implements ng.IComponentController{
  public loggedIn: boolean;

  constructor(private AuthService: IAuthService) {}

  $doCheck() {
    this.loggedIn = this.AuthService.isLoggedIn();
  }

}