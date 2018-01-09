import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent } from 'ngx-admin-lte';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
const routes: Routes = [
      {
          path: '',
          component: HomeComponent,
      },
      {
          path: 'report',
          component: ReportComponent,
      },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
