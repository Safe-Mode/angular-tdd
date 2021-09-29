import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should return the list of homes', () => {
    // Spy on and mock HttpClient
    httpClient = TestBed.inject(HttpClient);

    const mockedHomes = [{
      title: 'Home 1',
      image: 'src/assets/images/homes-1.jpg',
      location: 'New York',
      price: 100
    }, {
      title: 'Home 2',
      image: 'src/assets/images/homes-1.jpg',
      location: 'Boston',
      price: 200
    }, {
      title: 'Home 3',
      image: 'src/assets/images/homes-1.jpg',
      location: 'LA',
      price: 300
    }];

    spyOn(httpClient, 'get').and.returnValue(of(mockedHomes));

    // Use our service to get homes
    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('spy');
    service.getHomes().subscribe(spy);

    // Verify that service returned mocked data
    expect(spy).toHaveBeenCalledWith(mockedHomes);

    // Verify that service called the correct Http endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
