import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ng-rx
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/product.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductViewComponent } from './product/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        product: reducer
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
