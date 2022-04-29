import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

// Cambiar el locale de la app a español
import localeEs from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common'

// para cambiar el idioma
registerLocaleData( localeEs );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CustomerModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    // para cambiar al español
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
