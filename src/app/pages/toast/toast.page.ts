import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(
    private toastCtr: ToastController
  ) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtr.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
