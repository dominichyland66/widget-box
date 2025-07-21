import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsBox } from './terms-box';

describe('TermsBox', () => {
  let component: TermsBox;
  let fixture: ComponentFixture<TermsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
