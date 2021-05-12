import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { CreateQuotationComponent } from '../create-quotation/create-quotation.component';
import { QuotationUtilService } from '../services/quotation-util.service';

@Component({
  selector: 'adorn-app-quotation-main',
  templateUrl: './quotation-main.component.html',
  styleUrls: ['./quotation-main.component.scss']
})
export class QuotationMainComponent implements OnInit {
  companyList: any;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor(public dialog: MatDialog, private quotationService: QuotationUtilService) { }
  columnDefs;
  gridOptions = {
    defaultColDef: {
      resizable: true,
    },
  }
  rowData = [];
  ngOnInit() {
    this.quotationService.getColumnDefsForQuotation().subscribe(response => {
      this.agGrid.api.setColumnDefs(response);
      this.agGrid.api.sizeColumnsToFit();
    });
    this.quotationService.getQuotationList().subscribe((response) => {
      this.rowData = response;
    })
    this.quotationService.getCompanyList().subscribe((response) => {
      this.companyList = response;
    });
  }


  onCreateQuotation() {
    const dialogRef = this.dialog.open(CreateQuotationComponent, {
      width: '52em',
      height: '40em',
      data: {
        companyList: this.companyList
      }
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.quotationService.createQuotation(response).subscribe((result) => {
          this.agGrid.api.setRowData(result);
        });
      }
    })
  }
}
