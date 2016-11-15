import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http'; //mtm 11/11/2016; added to reference http module
import { ApiService } from '../shared';
import { Observable } from 'rxjs/Rx';


export interface ComputeInstance {
    name: string;
}


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService]                   // key linkage **don't forget 
})
export class HomeComponent implements OnInit {

    computeInstances: ComputeInstance[] = []; // [ { "name" : "server1" }, { "name" : "server2" }]; 
    errorMessage: string;

    constructor(private api: ApiService) { }

    public clicked() {

    }
    ngOnInit() {
        this.api
            .getComputeInstances()
            .subscribe(ci => this.computeInstances = ci,
                       error => this.errorMessage = <any>error
        );
    }
}
