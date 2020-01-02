import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { NaveComponent } from './nave/nave.component';
import { HomesComponent } from './homes/homes.component';
import { FeatureComponent } from './feature/feature.component';
import { PicingsComponent } from './picings/picings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PricingComponent,
    FeaturesComponent,
    HomeComponent,
    NaveComponent,
    HomesComponent,
    FeatureComponent,
    PicingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
