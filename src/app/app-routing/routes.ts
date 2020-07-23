import { Routes } from '@angular/router';

/** Components */
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
];
