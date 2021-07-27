import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
  component: HomeMainComponent
}];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgImageSliderModule],
  declarations: [
    HomeMainComponent
  ],
})
export class ModulesHomeModule {}
