import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'today',
    loadChildren: () => import('./pages/today/today.module').then(m => m.TodayModule)
  },
  {
    path: 'daily',
    loadChildren: () => import('./pages/daily/daily.module').then(m => m.DailyModule)
  },
  {
    path: 'weekly',
    loadChildren: () => import('./pages/weekly/weekly.module').then(m => m.WeeklyModule)
  },
  {
    path: 'monthly',
    loadChildren: () => import('./pages/monthly/monthly.module').then(m => m.MonthlyModule)
  },
  {
    path: '',
    redirectTo: 'today',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
