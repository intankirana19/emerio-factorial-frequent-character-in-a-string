import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    AlphabetComponent,
    PageNotFoundComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
