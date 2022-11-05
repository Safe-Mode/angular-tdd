import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookComponent } from './book.component';
import { FormsModule } from '@angular/forms';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: any;

  const element = (selector: string) => fixture.nativeElement.querySelector(selector);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [
        FormsModule
      ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    const homes = require('../../../../assets/homes.json');
    dialogData.home = homes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    expect(element('[data-test="title"]').textContent).toContain('Book Home 1');
  });

  it('should show the price', () => {
    expect(element('[data-test="price"]').textContent).toContain('$100 per night');
  });

  it('should show the check in date field', () => {
    expect(element('[data-test="check-in"]')).toBeTruthy();
  });

  it('should show the check out date field', () => {
    expect(element('[data-test="check-out"]')).toBeTruthy();
  });

  it('should show total price', () => {
    const checkInInputEl = element('[data-test="check-in"]');
    checkInInputEl.value = '2022-10-20';
    checkInInputEl.dispatchEvent(new Event('input'));

    const checkOutInputEl = element('[data-test="check-out"]');
    checkOutInputEl.value = '2022-10-30';
    checkOutInputEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(element('[data-test="total"]').textContent).toContain('Total: $1000');
  });
});
