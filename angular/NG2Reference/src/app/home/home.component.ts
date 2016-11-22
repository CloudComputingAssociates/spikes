import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http'; //mtm 11/11/2016; added to reference http module
import { ApiService } from '../shared';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'my-home',
  template: `<p> Home Works! <p>
             <div>
                <table border="1">
                <tr *ngFor="let u of users">
                    <td><span>{{u.Name }}</span></td>
                </tr>
                </table>
                <button (click)="clicked()" id="btnUserDetails">Invoke User Details Service</button>
              </div>`
  ,
  styleUrls: ['./home.component.scss'],
 // providers: [ApiService]                   // key linkage **don't forget 
})
export class HomeComponent implements OnInit {

    users: Array<any>;

    computeInstances: ComputeInstance[] = []; // [ { "name" : "server1" }, { "name" : "server2" }]; 
    errorMessage: string;

    constructor(private http: Http) { }

    public clicked() {
        this.getComputeInstances();
    }

    url: string = "http://dogservice.azurewebsites.net";

    getComputeInstances() {
        this.http.get(this.url)
            .subscribe((res: Response) => {
                this.users = res.json();
            });
    }


    ngOnInit() {

    }
}
