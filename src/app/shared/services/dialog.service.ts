import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() {
  }

  open() {
    alert('Booked!');
  }
}
