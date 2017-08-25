import {Component, Input} from "@angular/core";

@Component({
  selector: 'check2-comp',
  templateUrl: 'check2-comp.html',
})

export class Check2Comp {
  @Input() item: any;

  constructor() {
    console.log("check component task constructor..");
  }

  ionViewDidLoad() {
    console.log("IonViewDidLoad.");
  }

}
