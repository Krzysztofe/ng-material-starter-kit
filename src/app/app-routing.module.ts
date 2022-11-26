import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CheckboxComponentModule } from './components/checkbox/checkbox.component-module';
import { MenuComponentModule } from './components/menu/menu.component-module';
import { TableComponentModule } from './components/table/table.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent }, { path: 'products-category', component: ProductCategoryComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'holiday', component: HolidaysComponent }, { path: 'checkbox-categories', component: CheckboxComponent }, { path: 'categories-menu', component: MenuComponent }, { path: 'table', component: TableComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoryComponentModule, CryptoComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule, CheckboxComponentModule, MenuComponentModule, TableComponentModule, CategoriesServiceModule, ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
