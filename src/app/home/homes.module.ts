import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../shared/services/data.service';
import { HomesComponent } from './components/homes/homes.component';
import { BookComponent } from '../homes/components/book/book.component';

@NgModule({
  declarations: [
    HomesComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomesComponent
  ],
  providers: [
    DataService
  ]
})
export class HomesModule {
}
