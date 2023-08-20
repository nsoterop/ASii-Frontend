import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsApisService } from 'src/app/services/api-services/products-apis.service';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('sub1', {static: false}) sub1;

  public products;
  public totalProducts = 49103;

  public page = 1;
  public itemsPerPage = 20;
  public itemsPerPageOptions = [20, 50, 100, 200];
  public categories;

  public query = '';
  public categorySelected = false;
  public selectedCategory;
  public productsLoaded = false;
  public productQuantityType = 'Large';

  constructor(private productsApi: ProductsApisService, private router: Router, private productsService: ProductsService,
    private cartService: CartService) { }

  async ngOnInit() {
    this.productsService.categoryRefresh.subscribe(res => {
      if(res && this.productQuantityType === 'Large') {
        this.productsApi.getCategories().subscribe(res => {
          this.setCategories(res)
        })

        this.productQuantityType = 'Small';
      } else {
        this.productQuantityType = 'Large';
      }
    })

    this.productQuantityType = this.productsService.getProductQuantityType();
    await this.productsService.products.subscribe((products) => {
      this.products = products
      this.page = this.productsService.getPage()
      this.products.forEach(product => product.quantity = 1)
      this.productsLoaded = true
    })
    await this.productsService.updateProducts()
    await this.productsApi.getCategories().subscribe(res => {
      this.setCategories(res)
    })
  }
  public getProductQuantityType() {
    return this.productsService.getProductQuantityType();
  }

  public setCategories(res) {
    this.categories = res
    this.categories.sort((a,b) => a.CategoryPathName.localeCompare(b.CategoryPathName));
    this.categories.forEach(category => { category.SubCategories.sort((a,b) => a.CategoryPathName.localeCompare(b.CategoryPathName));})
    this.categories.map(item => {
      if(item.SubCategories.length) {
        item.open = false
        item.SubCategories.map(item2 => {
          if(item2.SubCategories.length) {
            item2.open = false
          }
        })
      }
    })
  }

  public viewProduct(product) {
    this.router.navigate(['product'], { queryParams: { productId: product._id } });
  }

  public updatePage(page) {
    this.productsLoaded = false
    this.page = page;
    this.productsService.updatePage(page)
  }

  public updateItemsPerPage(count) {
    this.productsLoaded = false
    this.itemsPerPage = count;
    this.productsService.updateItemsPerPage(count)
  }

  public getProducts() {
    this.productsLoaded = false
    this.productsService.updateProducts()
  }

  public filterByCategory(category) {
    this.productsLoaded = false
    if(this.productQuantityType === 'Large') {
      this.selectedCategory = category;
      let categoryId = category.CategoryPathID
      this.page = 1
      this.productsService.updateCategory(categoryId)
    } else {
      console.log(category)
    }
  }

  public searchProducts() {
    this.productsLoaded = false;
    this.categorySelected = false;
    this.page = 1
    this.productsService.updateQuery(this.query)
  }

  public addToCart(product) {
    this.cartService.updateCart(product, product.quantity)
  }

  public currentOpenFirstLevelCategoryID = "-1";
  public expandFirstLevelCategories(category) {
    category.open = !category.open
    if (this.currentOpenFirstLevelCategoryID !== category.CategoryPathID) {
      this.categories.find( item => {
        if(item.CategoryPathID === this.currentOpenFirstLevelCategoryID && this.currentOpenFirstLevelCategoryID!=="-1") {
          item.open = false
        }
      })
      this.currentOpenFirstLevelCategoryID = category.CategoryPathID
    }
  }

  public currentOpenSecondLevelCategoryID = "-1";
  public expandSecondLevelCategories(category) {
    category.open = !category.open
    if (this.currentOpenSecondLevelCategoryID !== category.CategoryPathID) {
      this.categories.find( item => {
        if(item.CategoryPathID === this.currentOpenSecondLevelCategoryID && this.currentOpenSecondLevelCategoryID!=="-1") {
          item.open = false
        }
      })
      this.currentOpenSecondLevelCategoryID = category.CategoryPathID
    }
  }
}
