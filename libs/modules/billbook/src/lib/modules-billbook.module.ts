import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceMainComponent } from './components/invoice/invoice-main/invoice-main.component';
import { CreateQuotationComponent } from './components/quotation/create-quotation/create-quotation.component';
import { QuotationMainComponent } from './components/quotation/quotation-main/quotation-main.component';
import { CoreToolsModule } from "@adorn-app/core/tools";
import { AgGridModule } from 'ag-grid-angular';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [{
  path: '',
  children: [{
    path: 'quotation',
    component: QuotationMainComponent,
  }, {
    path: 'invoice',
    component: InvoiceMainComponent,
  },
  { path: '**', redirectTo: '' }
  ]
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    CoreToolsModule, 
    AgGridModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, 
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [
    InvoiceMainComponent,
    CreateQuotationComponent,
    QuotationMainComponent
  ],
})
export class ModulesBillbookModule {}
