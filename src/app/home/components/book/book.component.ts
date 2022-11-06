import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../../shared/services/data.service';
const { DateTime } = require('luxon');

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  checkInDateStr = '';
  checkOutDateStr = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  getTotal(): number {
    return DateTime
      .fromISO(this.checkOutDateStr)
      .diff(DateTime.fromISO(this.checkInDateStr), 'days')
      .toObject()
      .days * this.data.home.price;
  }

  bookHome(event: Event): void {
    event.preventDefault();

    this.dataService
      .bookHome()
      .subscribe();
  }
}
