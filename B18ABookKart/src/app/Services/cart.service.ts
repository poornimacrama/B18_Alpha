import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public total=0;

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
   let grandTotal = 0;
    this.cartItemList.map((item:any)=>{
    grandTotal += (item.price * item.quantity);
     
    })
    return grandTotal;
    }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.bookId === a.bookId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

 
}