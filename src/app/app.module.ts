import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitorService } from './monitor.service';
import { ClarityModule } from '@clr/angular';
@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent
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
