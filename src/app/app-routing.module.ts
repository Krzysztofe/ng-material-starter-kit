import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'products-category', component: ProductCategoryComponent }, { path: 'crypto', component: CryptoComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
