import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from './order.model';


 

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

constructor(private dservice:AngularFirestore) { }

createOrder(order:Order){   
  this.dservice.collection('order').doc(order.name).set(order);
}

loadData(){
 return  this.dservice.collection<Order>('order');
}

}
