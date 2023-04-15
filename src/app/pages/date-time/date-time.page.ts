import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, IonModal } from '@ionic/angular';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  @ViewChild(IonModal) datetiem!: IonModal;

  constructor() { }

  ngOnInit() {

  }

  onClick(){
    this.datetiem.present();
  }

}
