import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../shared/services/data.service';
import { HomesComponent } from './components/homes/homes.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomesComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
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
