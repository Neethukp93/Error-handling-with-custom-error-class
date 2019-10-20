import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiCancelComponent } from './edi-cancel.component';

describe('EdiCancelComponent', () => {
  let component: EdiCancelComponent;
  let fixture: ComponentFixture<EdiCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
