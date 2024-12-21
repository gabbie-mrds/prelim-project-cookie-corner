import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'emplist', component: EmplistComponent},
    { path: 'about', component: AboutComponent},
    { path: 'products', component: ProductsComponent},
    { path: '**', pathMatch: 'full',  
        component: PageNotFoundComponent },
];
