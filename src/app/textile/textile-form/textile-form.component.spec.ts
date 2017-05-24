import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileFormComponent } from './textile-form.component';

describe('TextileFormComponent', () => {
  let component: TextileFormComponent;
  let fixture: ComponentFixture<TextileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
