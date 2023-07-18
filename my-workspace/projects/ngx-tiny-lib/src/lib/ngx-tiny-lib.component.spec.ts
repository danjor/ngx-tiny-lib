import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTinyLibComponent } from './ngx-tiny-lib.component';

describe('NgxTinyLibComponent', () => {
  let component: NgxTinyLibComponent;
  let fixture: ComponentFixture<NgxTinyLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTinyLibComponent]
    });
    fixture = TestBed.createComponent(NgxTinyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
