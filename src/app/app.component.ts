import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  template: `
  <h1>{{title}}</h1><h4>Check out my current 
  <a href="http://dakotacastleberg.netlify.com/" target="_blank">portfolio</a></h4>
  <nav>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'Dakota\'s Tour of Heroes';
}