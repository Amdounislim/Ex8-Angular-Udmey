import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CamelCasePipePipe } from './camel-case-pipe.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortePipe } from './sorte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipePipe,
    ReversePipe,
    SortePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
