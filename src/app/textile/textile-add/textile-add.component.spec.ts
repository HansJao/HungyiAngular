import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileAddComponent } from './textile-add.component';

describe('TextileAddComponent', () => {
  let component: TextileAddComponent;
  let fixture: ComponentFixture<TextileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
