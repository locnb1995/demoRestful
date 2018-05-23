import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnhanvienComponent } from './putnhanvien.component';

describe('PutnhanvienComponent', () => {
  let component: PutnhanvienComponent;
  let fixture: ComponentFixture<PutnhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutnhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
