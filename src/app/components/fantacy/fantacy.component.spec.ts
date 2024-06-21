import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantacyComponent } from './fantacy.component';

describe('FantacyComponent', () => {
  let component: FantacyComponent;
  let fixture: ComponentFixture<FantacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FantacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
