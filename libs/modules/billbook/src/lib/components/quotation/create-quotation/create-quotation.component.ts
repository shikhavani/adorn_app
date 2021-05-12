import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QuotationUtilService } from '../services/quotation-util.service';

@Component({
  selector: 'adorn-app-create-quotation',
  templateUrl: './create-quotation.component.html',
  styleUrls: ['./create-quotation.component.scss']
})
export class CreateQuotationComponent implements OnInit {
  quotationItems: FormArray;
  defaultConditionList = [{
    stmt1: `Delivery within`,
    stmt2: `days after receiving confirmation order`,
    input: '2-3'
  }, {
    stmt1: `Tax`,
    stmt2: ``,
    input: 'inculsive'
  }, {
    stmt1: `Freight`,
    stmt2: ``,
    input: 'extra'
  }]
  constructor(
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<CreateQuotationComponent>, 
    @Inject(MAT_DIALOG_DATA) public dialogData, 
  ) { }
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  quotationForm: FormGroup
  displayedColumns: string[] = ['sno', 'particulars', 'qty', 'rate', 'amount'];
  dataSource: MatTableDataSource<any>;
  conditionList;
  companyList;
  ngOnInit() {
    this.companyList = this.dialogData.companyList;
    this.initializeForm();
    this.quotationForm.get('companyItem').valueChanges.subscribe((value) => {
      this.quotationForm.patchValue({
        companyName: value.name,
        companyAddress: value.address,
        companyGSTNo: value.GSTno
      })
      this.quotationForm.get('companyAddress').disable();
      this.quotationForm.get('companyGSTNo').disable();
    });
  }

  initializeForm() {
    this.quotationForm = this.fb.group({
      companyItem: [{}],
      companyAddress: ['', Validators.required],
      companyGSTNo: [null, Validators.required],
      customerName: ['', Validators.required],
      customerAddress: ['', Validators.required],
      hasGSTNo: [false, Validators.required],
      customerGSTNo: [null],
      quotationDate: [Date, Validators.required],
      quotationItems: this.fb.array([this.addProductRow()]),
      modifyTermsConditions: [false],
      conditionList: this.fb.array([])
    });
    
    this.setDefaultConditions();
    this.dataSource = new MatTableDataSource((this.quotationForm.get('quotationItems') as FormArray).controls)
  }

  onChangeCompany() {

  }

  setDefaultConditions() {
    const conditionList = (this.quotationForm.get('conditionList') as FormArray);
    this.defaultConditionList.forEach((item) => {
      conditionList.push(this.newCondition(item))
    })
    this.conditionList = conditionList.controls;
  }

  addProductRow(): FormGroup {
    return this.fb.group({
      particulars: ['', Validators.required],
      quantity: [0, Validators.required],
      rate: [null, Validators.required],
      amount: [null, Validators.required]
    })
  }

  newCondition(condition?): FormGroup {
    return condition ? this.fb.group({
      stmt1: condition.stmt1,
      stmt2: condition.stmt2,
      input: condition.input,
      new: false
    }) : this.fb.group({
      stmt1: '',
      stmt2: '',
      input: '',
      new: true
    })
  }

  addNewCondition() {
    this.conditionList.push(this.newCondition());
    const list = (this.quotationForm.get('conditionList').value as FormArray)
    list.push(this.fb.control(false));
  }

  removeCondition(i: number) {
    this.conditionList.splice(i, 1);
    const list = (this.quotationForm.get('conditionList').value as FormArray)
    list.removeAt(i);
  }

  onAddProducts() {
    this.quotationItems = this.quotationForm.get('quotationItems') as FormArray;
    this.quotationItems.push(this.addProductRow());
    this.dataSource = new MatTableDataSource((this.quotationForm.get('quotationItems') as FormArray).controls)
  }

  resetForm() {
    this.initializeForm();
  }

  resetTermsConditions() {
    if (this.quotationForm.get('modifyTermsConditions').value) {
      (this.quotationForm.get('conditionList') as FormArray).clear();
      this.setDefaultConditions();
    }
  }

  onCreateQuotation() {
    this.dialogRef.close(this.quotationForm);
  }

}
