import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactPageComponent } from './cat-fact-page.component';

describe('CatFactPageComponent', () => {
  let component: CatFactPageComponent;
  let fixture: ComponentFixture<CatFactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatFactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
