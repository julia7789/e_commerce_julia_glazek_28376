import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-adm-products',
  templateUrl: './adm-products.component.html',
  styleUrls: ['./adm-products.component.scss']
})
export class AdmProductsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  newProduct = {
    thumbnail: 'https://powerplay.com.pl/userdata/gfx/66b8a4442b384ceea589df9886271954.jpg',
    title: 'Bloodborne',
    price: 100,
    category: 'game'
  };

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.mainService.getProducts(this.mainService.productsRequest);
  }
}
