import { Routes } from '@angular/router';

/** Components */
import { MenuComponent } from '../components/menu/menu.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { DishDetailComponent } from '../components/dish-detail/dish-detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'dish-detail/:id', component: DishDetailComponent },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
