import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './header/header.module';
import { HomesModule } from './home/homes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    HomesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
