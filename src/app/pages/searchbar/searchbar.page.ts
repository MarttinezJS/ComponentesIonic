import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  termino = '';
  comentarios: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getComents().subscribe( (rest: any[]) => {
      this.comentarios = rest;
    });
  }

  buscar( event ) {
    this.termino = event.detail.value;
  }
}
