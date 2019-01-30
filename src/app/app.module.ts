import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LandMainComponent } from './land-main/land-main.component';
import { LandDesignComponent } from './land-design/land-design.component';
import { LandComponent } from './land/land.component';
import { HardComponent } from './hard/hard.component';
import { WaterComponent } from './water/water.component';
import { WoodComponent } from './wood/wood.component';
import { AboutComponent } from './about/about.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LandMainComponent,
    LandDesignComponent,
    LandComponent,
    HardComponent,
    WaterComponent,
    WoodComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
