import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  { path: '', redirectTo: 'monitor', pathMatch: 'full' },
  { path: 'monitor', component: MonitorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
