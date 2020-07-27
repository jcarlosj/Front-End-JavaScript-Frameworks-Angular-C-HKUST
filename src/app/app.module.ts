import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Dependencies */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Angular Material Components */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/** Components */
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/** Services */
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';

/** Routing */
import { AppRoutingModule } from './app-routing/app-routing.module';

/** Dependencies */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HammerModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FontAwesomeModule
  ],
  providers: [
    DishService,
    LeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
