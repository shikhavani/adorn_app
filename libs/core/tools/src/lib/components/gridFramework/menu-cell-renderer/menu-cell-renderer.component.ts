import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
@Component({
  selector: 'adorn-app-menu-cell-renderer',
  templateUrl: './menu-cell-renderer.component.html',
  styleUrls: ['./menu-cell-renderer.component.scss']
})
export class MenuCellRendererComponent implements ICellRendererAngularComp {
  menuList;
  params: any;
  gridOptions: any;
  matIcon: string;
  iconColor: string;
  properties: any;
  constructor() { }

  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: any): void {
    this.params = params;
    this.gridOptions = this.params?.context?.gxAgGrid?.gridOptions;
    this.menuList = [];
    this.matIcon = 'more_vert';
    this.iconColor = '#9C9C9C';
  }

  customMenuList() {
    // this.properties =
    //   this.gxAgGridUtilService.getGxFrameworkParams(this.params) || {};

    // const menuList = this.properties?.menuList || [];
    // if (!this.hasValue(menuList) || !this.hasValue(menuList.length)) {
    //   return [];
    // }
    // this.processMenu(menuList);
    // return menuList;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }


}
