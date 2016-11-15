import { Component } from '@angular/core';
import { Http } from '@angular/http'; //mtm 11/11/2016; added to reference http module
import '../style/app.scss';

@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.html',
  /* template: `    // inline template example, to use comment out above templateUrl
    <header>
      <nav>
        <a [routerLink]="['']">Home</a>
        <a [routerLink]="['about']">About</a>
      </nav>
    </header>
    <main>
      <h1>Hello this is: {{api.title}}!</h1>

      <!-- Images (and assets) are parsed and loaded from within the public directory -->
      <img src="/img/angular.png">

      <router-outlet></router-outlet>
    </main>
    <footer>
      <a [href]="url">NG2 Reference App &copy; 2016 NWTS Technical Consulting. All rights reserved.</a>
    </footer>
    `, */
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack'

}
