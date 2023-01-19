import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from '../../services/productos-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit{
 constructor(public productsService:ProductosServicesService){}
ngOnInit(): void {
  this.productsService.loadProducts();
  }
}
