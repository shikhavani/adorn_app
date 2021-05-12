import { ApiService } from '@adorn-app/core/tools';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICreateQuotationPayload } from '../interfaces/quotation';
@Injectable({
  providedIn: 'root'
})
export class QuotationUtilService {

  constructor(private apiService: ApiService) { }
  context = {
    API_CONTEXT: '/api'
  }

  getColumnDefsForQuotation() {
    return this.apiService.sendGETRequest('assets/billbook/quotation-grid.json');
  }

  getQuotationList() {
    return this.apiService.sendGETRequest(this.context.API_CONTEXT + '/quotation/findAll')
  }

  getCompanyList() {
    return this.apiService.sendGETRequest(this.context.API_CONTEXT + '/company/findAll')
  }

  createQuotation(response) {
    const url = this.context.API_CONTEXT + '/company/create';
    const payload = this.createQuotationFormPayload(response);
    return this.apiService.sendPOSTRequest(url, JSON.stringify(payload));
  }

  createQuotationFormPayload(response): ICreateQuotationPayload {
    response = response.getRawValue();
    const productList = response.quotationItems.map((element) => {
      return {
        name: element.particulars,
        quantity: element.quantity,
        rate: element.rate,
        amount: element.amount
      }
    });
    return {
      name: response.customerName,
      address: response.customerAddress,
      GSTno: response.customerGSTNo,
      companyName: response.companyItem.companyName,
      termsCondition: JSON.stringify(response.conditionList),
      productList: productList
    }
  }
}
