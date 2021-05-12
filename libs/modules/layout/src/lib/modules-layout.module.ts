import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { CoreToolsModule } from "@adorn-app/core/tools";
@NgModule({
  imports: [CommonModule,
    RouterModule, 
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule, 
    MatButtonModule, 
    CoreToolsModule
  ],
  declarations: [
    LayoutMainComponent,  
  ],
  exports: [LayoutMainComponent]
})
export class ModulesLayoutModule {}
