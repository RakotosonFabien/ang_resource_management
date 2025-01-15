import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingModifComponent } from './listing-modif.component';

describe('ListingModifComponent', () => {
  let component: ListingModifComponent;
  let fixture: ComponentFixture<ListingModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingModifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
