import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ShopComponent } from './content/shop/shop.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';
import { ProductItemComponent } from './content/shop/product-list/product-item/product-item.component';
import { FullPageComponent } from './full-page/full-page.component';
import { TwoPageComponent } from './two-page/two-page.component';
import { NotFoundComponent } from './content/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductItemComponent,
    FullPageComponent,
    TwoPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
