import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { StoreComponent } from './store/store.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PhoneComponent } from './phone/phone.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SupportComponent } from './support/support.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    StoreComponent,
    LaptopComponent,
    PhoneComponent,
    AccessoriesComponent,
    SupportComponent,
    LearnMoreComponent,
    CheckOutComponent,
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
