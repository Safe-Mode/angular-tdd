import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
const { DateTime } = require('luxon');

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  checkInDateStr = '';
  checkOutDateStr = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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
}
