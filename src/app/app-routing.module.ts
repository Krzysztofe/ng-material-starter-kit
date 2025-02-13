import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductCategoryComponent} from './components/product-category/product-category.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {HolidaysComponent} from './components/holidays/holidays.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {MenuComponent} from './components/menu/menu.component';
import {TableComponent} from './components/table/table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {DetailProductComponent} from './components/detail-product/detail-product.component';
import {CatComponent} from './components/cat/cat.component';
import {AgeComponent} from './components/age/age.component';
import {CartComponent} from './components/cart/cart.component';
import {UserComponent} from './components/user/user.component';
import {PublicComponent} from './components/public/public.component';
import {ProductsServiceModule} from './services/products.service-module';
import {ProductCategoryComponentModule} from './components/product-category/product-category.component-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {HolidaysComponentModule} from './components/holidays/holidays.component-module';
import {HolidaysServiceModule} from './services/holidays.service-module';
import {CheckboxComponentModule} from './components/checkbox/checkbox.component-module';
import {MenuComponentModule} from './components/menu/menu.component-module';
import {TableComponentModule} from './components/table/table.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {LoginComponentModule} from './components/login/login.component-module';
import {LoginServiceModule} from './services/login.service-module';
import {RegisterFormComponentModule} from './components/register-form/register-form.component-module';
import {RegisterFormServiceModule} from './services/register-form.service-module';
import {ProductSelectServiceModule} from './services/product-select.service-module';
import {DetailProductComponentModule} from './components/detail-product/detail-product.component-module';
import {DetailsProductServiceModule} from './services/details-product.service-module';
import {CatComponentModule} from './components/cat/cat.component-module';
import {CatServiceModule} from './services/cat.service-module';
import {AgeComponentModule} from './components/age/age.component-module';
import {AgeServiceModule} from './services/age.service-module';
import {CartComponentModule} from './components/cart/cart.component-module';
import {CartServiceModule} from './services/cart.service-module';
import {UserComponentModule} from './components/user/user.component-module';
import {UserServiceModule} from './services/user.service-module';
import {PublicComponentModule} from './components/public/public.component-module';
import {PublicServiceModule} from './services/public.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{
      path: 'products-category',
      component: ProductCategoryComponent
    }, {path: 'crypto', component: CryptoComponent}, {
      path: 'holiday',
      component: HolidaysComponent
    }, {path: 'checkbox-categories', component: CheckboxComponent}, {
      path: 'categories-menu',
      component: MenuComponent
    }, {path: 'table', component: TableComponent}, {
      path: 'create-product',
      component: ProductFormComponent
    }, {path: 'create-employee', component: EmployeeFormComponent}, {
      path: 'login',
      component: LoginComponent
    }, {path: 'register', component: RegisterFormComponent}, {
      path: 'product/:id',
      component: DetailProductComponent
    }, {path: 'cat-facts', component: CatComponent},
      {path: 'age/:name', component: AgeComponent}, {
      path: 'cart/:id',
      component: CartComponent
    }, {path: 'user/:id', component: UserComponent}, {
      path: 'public',
      component: PublicComponent
    }]), ProductsServiceModule, ProductCategoryComponentModule, CryptoComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule, CheckboxComponentModule, MenuComponentModule, TableComponentModule, CategoriesServiceModule, ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterFormComponentModule, RegisterFormServiceModule, ProductSelectServiceModule, DetailProductComponentModule, DetailsProductServiceModule, CatComponentModule, CatServiceModule, AgeComponentModule, AgeServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule, PublicComponentModule, PublicServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
