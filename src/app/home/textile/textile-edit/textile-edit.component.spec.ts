import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileEditComponent } from './textile-edit.component';

describe('TextileEditComponent', () => {
  let component: TextileEditComponent;
  let fixture: ComponentFixture<TextileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
