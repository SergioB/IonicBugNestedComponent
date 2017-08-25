import {Component, Input} from "@angular/core";

@Component({
  selector: 'simple-comp',
  templateUrl: 'simple-comp.html',
})

export class SimpleComp {
  @Input() item: any;

  constructor() {
    console.log("simple component task constructor..");
  }

  ionViewDidLoad() {
    console.log("IonViewDidLoad.");
  }

}