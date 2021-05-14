import { Component, OnInit, } from '@angular/core';
import {Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Order  } from "../order.model";
import { addcoconutoil,addflaxseedoil,addgroundnutoil,addsasameoil,removecoconutoil,removeflaxseedoil,removegroundnutoil,removesasameoil,reset } from "../reducers/user.action";

interface Appdata{
  order:Order;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  coconutValue:number =400;
  coconut :string = 'Coconut Oil';

  groundnutValue:number = 320;
  groundnut:string = 'Groundnut Oil';

  flaxseedValue:number = 800;
  flaxseed:string = 'Flaxseed Oil';

  sesameseedValue:number = 500;
  sesameseed:string = 'Sesameseed Oil';

  order:Observable<Order>
  constructor(private store:Store<Appdata>) { 
    this.order = this.store.select('order');
    this.order.subscribe(data => { 
      
      this.coconutValue = data.coconutoil >0 ? 400*data.coconutoil: 400;
      this.coconut = data.coconutoil>0 ?'Coconut Oil'+'('+data.coconutoil+'X Selected)' :'Coconut Oil'

      this.groundnutValue = data.groundnutoil>0 ? 320* data.groundnutoil:320;
      this.groundnut = data.groundnutoil>0 ?'Groundnut Oil'+'('+data.groundnutoil+'X Selected)' :'Groundnut Oil'
    
      this.flaxseedValue = data.flaxseedoil >0 ? 800*data.flaxseedoil: 800;
      this.flaxseed = data.flaxseedoil>0 ?'Flaxseed Oil'+'('+data.flaxseedoil+'X Selected)' :'Flaxseed Oil'

      this.sesameseedValue = data.sesameoil>0 ? 500* data.sesameoil:500;
      this.sesameseed = data.sesameoil>0 ?'Sesameseed Oil'+'('+data.sesameoil+'X Selected)' :'Sesameseed Oil'
    
      
    }  );
  }

  ngOnInit() {
  }

  addcoconut(){
    this.store.dispatch(addcoconutoil());
  }
  removecoconut(){
    this.store.dispatch(removecoconutoil());
  }

  addgroundnut(){
    this.store.dispatch(addgroundnutoil());
  }

  removegroundnut(){
    this.store.dispatch(removegroundnutoil());
  }

  addflaxseed(){
    this.store.dispatch(addflaxseedoil());
  }

  removeflaxseed(){
    this.store.dispatch(removeflaxseedoil());
  }

  addsesameseed(){
    this.store.dispatch(addsasameoil())
  }
  removesesameseed(){
    this.store.dispatch(removesasameoil())

  }
}
