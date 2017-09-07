import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './AppRoutingModule';
import { AppComponent } from './components/app/AppComponent';
import { SceneComponent } from './components/scene/SceneComponent';
import { StatsComponent } from './components/stats/StatsComponent';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
