import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../shared/services/data.service';
import { HomesComponent } from './components/homes/homes.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomesComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  exports: [
    HomesComponent
  ],
  providers: [
    DataService
  ]
})
export class HomeModule {
}
