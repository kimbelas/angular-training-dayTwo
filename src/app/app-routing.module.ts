import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ShopComponent } from './content/shop/shop.component';
import { ProductListComponent } from './content/shop/product-list/product-list.component';
import { ProductViewComponent } from './content/shop/product-view/product-view.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { TwoPageComponent } from './two-page/two-page.component';
import { FullPageComponent } from './full-page/full-page.component';

const routes: Routes = [
  { path: '', component: TwoPageComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'shop', component: ShopComponent, children: [
          { path: '', component: ProductListComponent },
          { path: 'product/:id/view', component: ProductViewComponent },
        ]
      },
    ]
  },
  { path: 'not-found', component: FullPageComponent, children: [
      { path: '', component: NotFoundComponent },
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
