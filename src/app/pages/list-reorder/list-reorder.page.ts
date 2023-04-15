import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  disableReorder: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  doReorder($event: any){
    console.log($event);
    this.personajes = $event.detail.complete(this.personajes);
    console.log(this.personajes);
  }

  toggle(){
    this.disableReorder = !this.disableReorder;
  }

}
