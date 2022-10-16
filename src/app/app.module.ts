import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgileComponent } from './agile/agile.component';
import { SimplifyComponent } from './simplify/simplify.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgileComponent,
    SimplifyComponent,
    InnovativeComponent,
    DemopipeComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
