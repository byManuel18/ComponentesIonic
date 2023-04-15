import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textToSearch: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(data =>{
      this.albums = data;
    })
  }


  searchChange($event: any){
    this.textToSearch = $event.detail.value;
  }

}
