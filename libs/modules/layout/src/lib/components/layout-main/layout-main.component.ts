import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'adorn-app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {

  constructor(private router: Router) { }


modulesList = [{
    displayName: 'Home',
    iconName: 'home',
    value: 'home',
    path: '/home'
  },
  // {
  //   displayName: 'Data Grid',
  //   iconName: 'grid_on',
  //   value: 'data_grid',
  //   path: '/dataGrid',
  // },
  // {
  //   displayName: 'Layers',
  //   iconName: 'layers',
  //   value: 'layers',
  //   path: '/layers'
  // },
  {
    displayName: 'Bill book',
    iconName: 'receipt',
    value: 'billbook',
    path: '/billbook',
    children: [{
      displayName: 'Quotation',
      iconName: 'sticky_note_2',
      value: 'quotation',
      path: '/billbook/quotation',
      callback: this.onModuleClick.bind(this)
    },{
      displayName: 'Invoice',
      iconName: 'receipt_long',
      value: 'invoice',
      path: '/billbook/invoice',
      callback: this.onModuleClick.bind(this)
    }]
  },
  // {
  //   displayName: 'Performance',
  //   iconName: 'bar_chart',
  //   value: 'performance',
  //   path: '/performance'
  // },
  // {
  //   displayName: 'About',
  //   iconName: 'info',
  //   value: 'about',
  //   path: '/about'
  // }
  ]
  selectedModule = this.modulesList[0];

  ngOnInit() {
  }

  onModuleClick(item) {
    this.selectedModule = item;
    this.router.navigateByUrl(this.selectedModule.path);
  }

}
