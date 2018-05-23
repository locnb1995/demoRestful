import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnhanvienComponent } from './postnhanvien.component';

describe('PostnhanvienComponent', () => {
  let component: PostnhanvienComponent;
  let fixture: ComponentFixture<PostnhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
