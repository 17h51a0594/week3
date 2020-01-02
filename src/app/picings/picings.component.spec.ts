import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicingsComponent } from './picings.component';

describe('PicingsComponent', () => {
  let component: PicingsComponent;
  let fixture: ComponentFixture<PicingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
