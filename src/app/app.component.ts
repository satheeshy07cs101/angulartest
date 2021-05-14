import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavComponent } from './nav/nav.component';
import { animate, style, transition, trigger } from '@angular/animations';
import {Store} from '@ngrx/store';
import {Order} from './order.model';
import { Observable } from 'rxjs';

interface Appdata{
  order:Order;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('fade',[
      transition('void =>*',[        
        animate(2000, style({backgroundColor:'lightgreen',  opacity:1}))
      ]),  
    ])
  ]
})
export class AppComponent {
  title = 'oilStore';
  
  original = true;
  cartStyle = {position:'static'};
  order:Observable<Order>;
  itemsCount:number=0;
  items:string = '';

  constructor(private store:Store<Appdata> ){
    this.order = this.store.select('order');
    this.order.subscribe(data => {this.itemsCount = data.coconutoil+data.flaxseedoil+data.groundnutoil+data.sesameoil
              console.log('printing items count'+this.itemsCount)
              this.items = this.itemsCount >0 ? '('+this.itemsCount+')' : '';
              this.cartAction()});    
  }

  cartAction(){     
     
  }
  
}
