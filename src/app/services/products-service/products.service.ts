import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ProductsApisService } from '../api-services/products-apis.service';
import { CartService } from '../cart-service/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products = new Observable<any>()
  private productsSubject = new Subject<Object>()

  public categoryRefresh = new Observable<any>()
  private categoryRefreshSubject = new Subject<Object>()

  public page = 1
  public itemsPerPage = 20
  public category = ''
  public query = ''
  public productQuantityType = localStorage.getItem("productQuantityLabel") ? localStorage.getItem("productQuantityLabel") : 'Large';

  constructor(private productsApis: ProductsApisService, private router: Router, private cartService: CartService) {
    this.productsSubject = new Subject();
    this.products = this.productsSubject.asObservable();
    this.categoryRefreshSubject = new Subject();
    this.categoryRefresh = this.categoryRefreshSubject.asObservable();
  }

  public setProductApiURL(quantityType) {
    this.cartService.clearCart();
    this.productQuantityType = quantityType;
    localStorage.setItem("productQuantityLabel", quantityType)
    if (quantityType === 'Large') {
      this.productsApis.setProductApiURL('products');
      localStorage.setItem("productQuantityType", 'products')
    } else if (quantityType === 'Small') {
      this.productsApis.setProductApiURL('smallQuantityProducts');
      localStorage.setItem("productQuantityType", 'smallQuantityProducts')
    }
    this.page = 1;
    this.itemsPerPage = 20;
    this.getProducts();
    this.categoryRefreshSubject.next(true);
    this.router.navigate(['/'])
  }
  public getProductQuantityType() {
    return this.productQuantityType;
  }

  public updateProducts() {
    if(this.query.length){
      this.searchProducts()
    } else if(this.category.length) {
      this.searchProductsByCategory()
    }else {
      this.getProducts()
    }
  }

  public getProducts() {
    this.category = ''
    this.query = ''
    this.productsApis.getProducts(this.page, this.itemsPerPage).subscribe(res => {
      this.productsSubject.next(res)
    });
  }

  public searchProducts() {
    this.category = ''
    this.router.url !== '/' ? this.router.navigate(['/']) : null
    this.productsApis.searchProducts(this.page, this.itemsPerPage, this.query).subscribe(res => {
      this.productsSubject.next(res)
    })
  }

  public searchProductsByCategory() {
    this.query = ''
    this.productsApis.searchProductsByCategory(this.page, this.itemsPerPage, this.category).subscribe(res => {
      this.productsSubject.next(res)
    })
  }

  public getPage() { return this.page; }
  public updatePage(page) {
    this.page = page
    this.updateProducts()
  }

  public getItemsPerPage() { return this.itemsPerPage }
  public updateItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage
    this.updateProducts()
  }

  public getCategory() { return this.category; }
  public updateCategory(category) {
    this.page = 1
    this.category = category
    this.searchProductsByCategory()
  }

  public getQuery() { return this.query; }
  public updateQuery(query) {
    this.page = 1
    this.query = query
    this.searchProducts()
  }

  public exactNameSearch(name) {
    this.page = 1
    this.query = name
    this.productsApis.exactNameSearch(this.page, this.itemsPerPage, name).subscribe(res => {
      this.productsSubject.next(res)
    })
  }
}
