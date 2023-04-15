import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.showLoading('Cargando...');
    setTimeout(()=>{
      	this.dismissLoading();
    },2000)
  }


  async showLoading(message: string) {
    if(!this.loading || !this.loading.isOpen){
      this.loading = await this.loadingCtrl.create({
        message,
      });

      await this.loading.present();
      this.loading.isOpen = true;
    }
  }

  async dismissLoading(){
    if(this.loading && this.loading.isOpen){
      await this.loading.dismiss();
      this.loading.isOpen = false;
    }
  }

}
