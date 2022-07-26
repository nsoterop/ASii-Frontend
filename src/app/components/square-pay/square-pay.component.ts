import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-square-pay',
  templateUrl: './square-pay.component.html',
  styleUrls: ['./square-pay.component.css']
})
export class SquarePayComponent implements OnInit {
  @ViewChild('iframe') squarePayFrame = document.getElementById('squarePayFrame')

  constructor(private sanitizer: DomSanitizer, private cartService: CartService) { }

  public squarePayLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000')

  public cart;
  public orderId;

  ngOnInit(): void {
  }
}
