import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsApisService {

  private productsApiURL = `${environment.baseApi}/${localStorage.getItem("productQuantityType") ? localStorage.getItem("productQuantityType") : "products"}`;

  constructor(private http: HttpClient) { }

  public setProductApiURL(quantityType) {
    this.productsApiURL = `${environment.baseApi}/${quantityType}`
  }

  public getProducts(page, itemsPerPage) {
    return this.http.get(`${this.productsApiURL}/all/${page}/${itemsPerPage}`)
  }

  public getProductById(id) {
    console.log(this.productsApiURL)
    return this.http.get(`${this.productsApiURL}/getById/${id}`);
  }

  public searchProducts(page, itemsPerPage, query) {
    return this.http.get(`${this.productsApiURL}/search/${page}/${itemsPerPage}/${encodeURIComponent(query)}`)
  }

  public searchProductsByCategory(page, itemsPerPage, categoryId) {
    return this.http.post(`${this.productsApiURL}/filterCategory/${page}/${itemsPerPage}`, {category: categoryId})
  }

  public getCategories() {
    return this.http.get(`${this.productsApiURL}/categories`)
  }

  public autoComplete(query) {
    return this.http.get(`${this.productsApiURL}/autocomplete/${encodeURIComponent(query)}`)
  }

  public exactNameSearch(page, itemsPerPage, name) {
    return this.http.get(`${this.productsApiURL}/exactNameSearch/${page}/${itemsPerPage}/${encodeURIComponent(name)}`)
  }

  public checkout(cart) {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })
    return this.http.post(`${this.productsApiURL}/order`, cart, { headers })
  }

  public sendPayment(token) {
    return this.http.post(`${this.productsApiURL}/createPayment`, token)
  }
}
