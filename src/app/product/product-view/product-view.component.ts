import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as ProductActions from '../../actions/product.actions';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('product');
  }

  ngOnInit() {
  }

  deleteProduct(index) {
    this.store.dispatch(new ProductActions.RemoveProduct(index));
  }

}
