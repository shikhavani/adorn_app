import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCellRendererComponent } from './menu-cell-renderer.component';

describe('MenuCellRendererComponent', () => {
  let component: MenuCellRendererComponent;
  let fixture: ComponentFixture<MenuCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
