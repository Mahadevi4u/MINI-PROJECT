import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  constructor(private msg: MessengerService,private cartService: CartService) { }
  cartTotal = 0;
  ngOnInit() {
      this.handleSubscription();
      this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:any= Product) => {
      this.loadCartItems();
    
    })
  }
  
  loadCartItems(){
      this.cartService.getCartItems().subscribe((items : CartItem[]) => {
       this.cartItems = items;
       this.calcCartTotal();
      })
  }

 
 removeFromCart(item:any){
   this.cartService.deleteItem(item.id).subscribe( ()=>
         this.loadCartItems()
   )
      
 }


  calcCartTotal(){
    this.cartTotal = 0
      this.cartItems.forEach((item: any) => {
        this.cartTotal += (item.qty * item.price);
      
      })
  }
  }
