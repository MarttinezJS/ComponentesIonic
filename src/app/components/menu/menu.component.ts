import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from '../../models/Component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private dataService: DataService) { }

  componentes: Observable<Componente[]>;
  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
