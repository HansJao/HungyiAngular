import { WebapiService } from './services/webapi.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { ProductService } from './services/product.service';
import { TextileService } from './services/textile.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { TextileComponent } from './textile/textile.component';
import { TextileEditComponent } from './textile/textile-edit/textile-edit.component';
import { TextileAddComponent } from './textile/textile-add/textile-add.component';
import { TextileAllComponent } from './textile/textile-all/textile-all.component';
import { TextileFormComponent } from './textile/textile-form/textile-form.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAllComponent } from './customer/customer-all/customer-all.component';
import { TextileShipmentsComponent } from './textile/textile-shipments/textile-shipments.component';
import { OrderComponent } from './customer/order/order.component';
import { CustomerSelectComponent } from './customer/customer-select/customer-select.component';
import { OrderDetailComponent } from './customer/order-detail/order-detail.component';
import { OrderResultComponent } from './textile/order-result/order-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavmenuComponent,
    TextileComponent,
    DropdownDirective,
    TextileEditComponent,
    TextileAddComponent,
    TextileAllComponent,
    TextileFormComponent,
    ProductComponent,
    CustomerComponent,
    CustomerAllComponent,
    TextileShipmentsComponent,
    OrderComponent,
    CustomerSelectComponent,
    OrderDetailComponent,
    OrderResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    TextileService,
    ProductService,
    AuthenticationService,
    AuthGuardService,
    WebapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
