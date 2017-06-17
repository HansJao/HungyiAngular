import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileShipmentsComponent } from './textile-shipments.component';

describe('TextileShipmentsComponent', () => {
  let component: TextileShipmentsComponent;
  let fixture: ComponentFixture<TextileShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
