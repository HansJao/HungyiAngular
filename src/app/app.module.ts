import { TextileService } from './services/textile.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TextileAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    TextileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
