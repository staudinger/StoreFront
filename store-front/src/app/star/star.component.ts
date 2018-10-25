import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  rating: number=4;
  starWidth: number;

  constructor() { }

  ngOnChanges() : void {
    this.starWidth = this.rating *  75/5
  }

}
