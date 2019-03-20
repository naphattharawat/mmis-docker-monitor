import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitorService } from './monitor.service';
import { ClarityModule } from '@clr/angular';
import { Monitor2Component } from './monitor2/monitor2.component';
import { Monitor3Component } from './monitor3/monitor3.component';
@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    Monitor2Component,
    Monitor3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    MonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
