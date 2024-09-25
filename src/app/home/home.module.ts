import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { BannerPage } from '../shared/banner/banner.page';
import { BannerPageModule } from '../shared/banner/banner.module';
import { GaleryPageModule } from '../shared/galery/galery.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    BannerPageModule,
    GaleryPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
