import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],

})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData($event: any){
    setTimeout(()=>{

      // $event.target.complete();
      this.infiniteScroll.complete()

      this.data.push(...Array(20));
      if(this.data.length > 50){
        this.infiniteScroll.disabled = true;
      }
    },1500)
  }

}
