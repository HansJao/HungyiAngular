import { TextileAllComponent } from './textile/textile-all/textile-all.component';
import { TextileAddComponent } from './textile/textile-add/textile-add.component';
import { TextileEditComponent } from './textile/textile-edit/textile-edit.component';
import { TextileComponent } from './textile/textile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'textile', component: TextileComponent, children: [
            { path: '', component: TextileAllComponent },
            { path: ':id', component: TextileEditComponent },
            { path: 'Add', component: TextileAddComponent }]
    }



    // {
    //     path: 'recipes', component: RecipesComponent, children: [
    //         { path: '', component: RecipeStartComponent },
    //         { path: 'new', component: RecipeEditComponent },
    //         { path: ':id', component: RecipeDetailComponent },
    //         { path: ':id/edit', component: RecipeEditComponent }

    //     ]
    // },


]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}