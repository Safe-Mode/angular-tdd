import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../shared/services/data.service';
import { HomesComponent } from './components/homes/homes.component';

@NgModule({
  declarations: [
    HomesComponent
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
