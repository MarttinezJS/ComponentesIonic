import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) lista: IonList;
  data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getUsers();
  }

  share( user ) {
    console.log('Compartir: ', user);
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    console.log('Borrar: ', user);
    this.lista.closeSlidingItems();
  }

  favorite( user ) {
    console.log('Favorite: ', user);
    this.lista.closeSlidingItems();
  }
}
