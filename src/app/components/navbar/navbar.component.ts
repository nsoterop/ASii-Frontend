import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ProductsApisService } from 'src/app/services/api-services/products-apis.service';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { ProductsService } from 'src/app/services/products-service/products.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public query = '';
  public cart: any = {};
  public totalCartPrice = 0;
  public autoCompleteOptions: any = [];
  public checkingOut = false;
  public productQuantityType = "Large";

  constructor(private productsService: ProductsService, private cartService: CartService, private modalService: NgbModal,
    private router: Router, private productsApis: ProductsApisService) {

      router.events.subscribe((val) => {
        if(val['url'] === '/checkout') {
          this.checkingOut = true;
        }
    });
  }

  ngOnInit(): void {
    this.productQuantityType = this.productsService.getProductQuantityType();
    this.cart = this.cartService.getCart()
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart
    })
  }

  public changeProductQuantityType(quantity){
    this.productQuantityType = quantity;
    this.productsService.setProductApiURL(quantity);
  }

  public searchProducts() {
    this.query.length ? this.productsService.updateQuery(this.query) : this.productsService.getProducts()
  }

  public exactNameSearch(productName) {
    this.autoCompleteOptions = []
    this.productsService.exactNameSearch(productName)
  }

  search = (text: Observable<string>) => {
    return text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => {
        return term.length < 2 ? [].slice() : this.autoCompleteOptions;
      })
    );
  }

  public onSearchInput() {
    if(10 > this.query.length && this.query.length > 2) {
      this.productsApis.autoComplete(this.query).subscribe((res: Object[]) => {
        this.autoCompleteOptions = res.map(item => item['_id']['ProductName'])
      })
    }
  }

  closeResult = ''

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  public removeCartItem(item) {
    this.cartService.deleteCartItem(item)
  }

}
