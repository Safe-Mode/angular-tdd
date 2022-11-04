import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from "jasmine-es6-spies";
import { of } from 'rxjs';

import { DataService } from '../../../shared/services/data.service';
import { HomesComponent } from './homes.component';
import { DialogService } from '../../../shared/services/dialog.service';

describe('HomeComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesComponent ],
      providers: [{
        provide: DataService,
        useFactory: () => spyOnClass(DataService)
      }, {
        provide: DialogService,
        useFactory: () => spyOnClass(DialogService)
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);

    dataService.getHomes.and.returnValue(of([{
      title: 'HomeInterface 1',
      image: 'src/assets/images/homes-1.jpg',
      location: 'New York',
      price: 100
    }, {
      title: 'HomeInterface 2',
      image: 'src/assets/images/homes-1.jpg',
      location: 'Boston',
      price: 200
    }, {
      title: 'HomeInterface 3',
      image: 'src/assets/images/homes-1.jpg',
      location: 'LA',
      price: 300
    }]));

    fixture.detectChanges();
  });

  it('should show homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show homes info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');

    expect(home.querySelector('[data-test="title"]').innerText).toEqual('HomeInterface 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('New York');
    expect(home.querySelector('[data-test="price"]').innerText).toEqual('$100');
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should show book btn', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-btn"]')).toBeTruthy();
  });

  it('should use dialog service to open book dialog, when clicking Book Btn', () => {
    const bookBtn = fixture.nativeElement.querySelector('[data-test="book-btn"]');

    bookBtn.click();
    expect(dialogService.open).toHaveBeenCalled();
  });
});
