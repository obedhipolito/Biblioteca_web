import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { LandingComponent } from './landing/landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    LandingComponent,
    FooterLandingComponent,
    CatalogoLandingComponent,
    ServiciosLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
