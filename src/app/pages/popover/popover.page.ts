import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverCtr: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverCtr.create({
      component: PopoverInfoComponent,
      event: e,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    const resp = await popover.onDidDismiss();

    console.log(resp);

  }

  onClick(e: Event){
    this.presentPopover(e)
  }

}
