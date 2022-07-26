import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApisService } from 'src/app/services/api-services/products-apis.service';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-product-full-view',
  templateUrl: './product-full-view.component.html',
  styleUrls: ['./product-full-view.component.css']
})
export class ProductFullViewComponent implements OnInit {

  private productId;

  public product;
  public loaded = false;
  public quantity = 1;

  constructor(private productsApi: ProductsApisService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
    });

    this.getProduct();
  }

  public getProduct() {
    this.productsApi.getProductById(this.productId).subscribe(res => {
      this.product = res;
    })

    this.loaded = true;
  }

  public addToCart(product, quantity) {
    this.cartService.updateCart(product, quantity)
  }

}
