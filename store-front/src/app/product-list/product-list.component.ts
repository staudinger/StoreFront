import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
    "productId": 2,
    "productName" : "Tomato",
    "productCode" : "GDN-0023",
    "releaseDate" : "March 18, 2016",
    "description" : "Roma",
    "price" : 32.99,
    "starRating" : 4.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/262421/Tomato-by-Rones.png"
    }
  ];


  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
   }


  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  

  ngOnInit() {
  }

}
