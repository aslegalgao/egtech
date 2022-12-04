import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { PhoneComponent } from './phone/phone.component';
import { StoreComponent } from './store/store.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: "EG Tech"}},
  {path: 'store', component: StoreComponent, data: {title: "EG Tech  |  Store"}},
  {path: 'laptop', component: LaptopComponent, data: {title: "EG Tech  |  Laptop"}},
  {path: 'phone', component: PhoneComponent, data: {title: "EG Tech  |  Phone"}},
  {path: 'accessories', component: AccessoriesComponent, data: {title: "EG Tech  |  Phone"}},
  {path: 'support', component: SupportComponent, data: {title: "EG Tech  |  Phone"}},
  {path: 'learn-more', component: LearnMoreComponent, data: {title: "EG Tech  |  Phone"}},




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    anchorScrolling: "enabled",
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
