import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as ProductActions from '../../actions/product.actions';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  public defaultImage = 'https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/First_S10_Lockup1_Blue_gallery.jpg';

  constructor(private store: Store<AppState>) { }

  addProduct(data) {
    console.log(data);
    this.store.dispatch(new ProductActions.AddProduct(data));
  }

  ngOnInit() {
  }

}
