import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {reorderArray} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  appName = 'Ionic App';
  elements = [
    { title:'aaa', type: "check" },
    { title:'bbb', type: "check" },
    { title:'ccc', type: "check" },
    { title:'aaa2', type: "check2" },
    { title:'bbb2', type: "check2" },
    { title:'ccc2', type: "check2" },
    { title:'ddd', type: "other" },
    { title:'eee', type: "other" },
    { title:'fff', type: "other" },
    ];

  constructor(public navController: NavController) { }

  reorderItems(indexes) {
    this.elements = reorderArray(this.elements, indexes);
  }

}
