import { Component, OnInit } from '@angular/core';

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
  listFilter: string = 'cart';
  products: any[] = [
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
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }

}
