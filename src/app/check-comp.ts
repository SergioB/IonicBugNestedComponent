import {Component, Input} from "@angular/core";

@Component({
  selector: 'check-comp',
  templateUrl: 'check-comp.html',
})

export class CheckComp {
  @Input() item: any;

  constructor() {
    console.log("check component task constructor..");
  }

  ionViewDidLoad() {
    console.log("IonViewDidLoad.");
  }

}
