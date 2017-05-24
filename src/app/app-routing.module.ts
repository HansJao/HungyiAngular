import { TextileEditComponent } from './home/textile/textile-edit/textile-edit.component';
import { TextileComponent } from './home/textile/textile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'textile', component: TextileComponent },
            { path: 'textile/:id', component: TextileEditComponent }
        ]
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