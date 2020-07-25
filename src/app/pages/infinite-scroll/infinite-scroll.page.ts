import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) iScroll: IonInfiniteScroll;
  data = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {
    setTimeout(() => {
      if ( this.data.length > 90 ) {
        this.iScroll.disabled = true;
        return;
      }
      const arr = Array(20);
      this.data.push(...arr);
      event.target.complete();
    }, 1000);
  }

}
