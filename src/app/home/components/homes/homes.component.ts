import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes$: Observable<any[]> | null = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes();
  }

}
