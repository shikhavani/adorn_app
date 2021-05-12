import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ModulesLayoutModule } from '@adorn-app/modules/layout'
const routes: Routes = [
  // {
  //     path: 'dataGrid',
  //     loadChildren: () => import('@nrwl-workspace/modules/data-grid').then(
  //       (m) => m.ModulesDataGridModule
  //     ),
  // },
  {
    path: 'billbook',
    loadChildren: () => import('@adorn-app/modules/billbook').then(
      (m) => m.ModulesBillbookModule
    ),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModulesLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
