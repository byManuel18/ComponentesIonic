import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title: string = '';
  @Input() mode: string = 'ios';
  @Input() color: string = 'primary';
  @Input() slot: string = 'start';
  @Input() defaultHref: string = '/inicio';
  @Input() text: string = 'Regresar';
  @Input() backButton: boolean = true;
  @Input() showAvatar: boolean = false;

  constructor(
    private menuCtr: MenuController,
  ) { }

  ngOnInit() {
  }

  openMenu(){
    this.menuCtr.open('primerMenu');
  }

}
