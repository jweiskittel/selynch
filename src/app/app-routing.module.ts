import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LandComponent } from './land/land.component';
import { HardComponent } from './hard/hard.component';
import { WaterComponent } from './water/water.component';
import { WoodComponent } from './wood/wood.component';
import { LandMainComponent } from './land-main/land-main.component';
import { LandDesignComponent } from './land-design/land-design.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'landscapes', component: LandComponent},
  {path: 'hardscapes', component: HardComponent},
  {path: 'water-features', component: WaterComponent},
  {path: 'wood-structures', component: WoodComponent},
  {path: 'land-maintenance', component: LandMainComponent},
  {path: 'land-design', component: LandDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
