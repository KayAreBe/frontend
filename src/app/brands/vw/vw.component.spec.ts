import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwComponent } from './vw.component';

describe('VwComponent', () => {
  let component: VwComponent;
  let fixture: ComponentFixture<VwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
