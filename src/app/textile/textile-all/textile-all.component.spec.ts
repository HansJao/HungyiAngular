import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileAllComponent } from './textile-all.component';

describe('TextileAllComponent', () => {
  let component: TextileAllComponent;
  let fixture: ComponentFixture<TextileAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
