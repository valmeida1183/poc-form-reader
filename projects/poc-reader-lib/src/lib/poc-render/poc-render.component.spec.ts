import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocRenderComponent } from './poc-render.component';

describe('PocRenderComponent', () => {
  let component: PocRenderComponent;
  let fixture: ComponentFixture<PocRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
