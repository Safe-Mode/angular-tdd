import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
const { DateTime } = require('luxon');
import { DataService } from '../../../shared/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  checkInDateStr = '';
  checkOutDateStr = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dataService: DataService,
              private bookDialogRef: MatDialogRef<BookComponent>,
              private snackBar: MatSnackBar) {
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
      .subscribe(() => {
        this.bookDialogRef.close();
        this.snackBar.open('Home is booked successfully!')
      });
  }
}
