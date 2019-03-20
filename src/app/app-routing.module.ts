import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { Monitor2Component } from './monitor2/monitor2.component';
import { Monitor3Component } from './monitor3/monitor3.component';

const routes: Routes = [
  { path: '', redirectTo: 'monitor', pathMatch: 'full' },
  { path: 'monitor', component: MonitorComponent },
  { path: 'monitor2', component: Monitor2Component },
  { path: 'monitor3', component: Monitor3Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
