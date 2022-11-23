import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'products-category', component: ProductCategoryComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'holiday', component: HolidaysComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CryptoComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
