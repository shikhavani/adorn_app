import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AgGridModule } from 'ag-grid-angular';
import { MenuCellRendererComponent } from './components/gridFramework/menu-cell-renderer/menu-cell-renderer.component';
@NgModule({
  imports: [CommonModule, MatButtonModule, AgGridModule ,MatIconModule, MatMenuModule, HttpClientModule],
  declarations: [MenuItemComponent, MenuCellRendererComponent],
  exports: [MenuItemComponent],
  providers: [ApiService]
})
export class CoreToolsModule { }
