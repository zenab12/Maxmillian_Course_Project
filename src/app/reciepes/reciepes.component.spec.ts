import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepesComponent } from './reciepes.component';

describe('ReciepesComponent', () => {
  let component: ReciepesComponent;
  let fixture: ComponentFixture<ReciepesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciepesComponent]
    });
    fixture = TestBed.createComponent(ReciepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
