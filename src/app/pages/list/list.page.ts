import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) mylist!: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(usuario:any){
    this.mylist.closeSlidingItems();
  }

  share(usuario:any){

  }

}
