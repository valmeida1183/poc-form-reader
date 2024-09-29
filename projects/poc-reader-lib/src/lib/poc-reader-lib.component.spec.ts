import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocReaderLibComponent } from './poc-reader-lib.component';

describe('PocReaderLibComponent', () => {
  let component: PocReaderLibComponent;
  let fixture: ComponentFixture<PocReaderLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocReaderLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocReaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
