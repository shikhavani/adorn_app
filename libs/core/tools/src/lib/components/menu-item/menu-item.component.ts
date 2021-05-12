import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'adorn-app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  constructor() { }
  @Input() menuList;
  @ViewChild('childMenu', {static: true}) public childMenu;
  @Output() menuItemClick = new EventEmitter();
  ngOnInit() {
  }

  onMenuItemClick(item: any) {
    if (item.callback) {
      item.callback(item);
    }
    this.menuItemClick.emit(item);
  }

}
