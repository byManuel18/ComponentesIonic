import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  items = Array(40);

  constructor(
    private popoverCtr: PopoverController
  ) { }

  ngOnInit() {}

  onClick(valor: number){
    this.popoverCtr.dismiss({item: valor})
  }

}
