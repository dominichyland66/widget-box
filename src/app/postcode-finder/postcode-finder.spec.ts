import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeFinder } from './postcode-finder';

describe('PostcodeFinder', () => {
  let component: PostcodeFinder;
  let fixture: ComponentFixture<PostcodeFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcodeFinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcodeFinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
