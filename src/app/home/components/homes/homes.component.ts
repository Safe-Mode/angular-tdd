import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { BookComponent } from '../book/book.component';
import { HomeInterface } from '../../models/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes$: Observable<any[]> | null = null;

  constructor(private dataService: DataService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes();
  }


  openDialog(home: HomeInterface): void {
    this.dialogService.open(BookComponent, {
      data: { home }
    });
  }
}
