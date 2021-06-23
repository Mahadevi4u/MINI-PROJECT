import { Component, Input, OnInit } from '@angular/core';
import {CartComponent} from 'src/app/components/shopping-cart/cart/cart.component'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: any
  constructor(private cartremove:CartComponent) { }

  ngOnInit(): void {

  }
  remove(item:any) {
   this.cartremove.removeFromCart(item);
   }
 }

