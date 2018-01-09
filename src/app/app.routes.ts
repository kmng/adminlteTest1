import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutAuthComponent, LayoutLoginComponent, LayoutRegisterComponent } from 'ngx-admin-lte';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { LoginComponent } from './pages/login/login.component';

import { HeaderWidgetComponent } from './widgets/header-widget/header-widget.component';
const routes: Routes = [
      {
          canActivate: [CanActivateGuard],
          path: '',
          children: [
            {
         canActivate: [CanActivateGuard],
         component: HomeComponent,
         path: 'home'
        }],
          component: LayoutAuthComponent,
          data: [{
      'skin': 'skin-black',
      'display_tasks': false,
      'header_components': [{
        class: HeaderWidgetComponent,
        data: {
          label: 'test widget'
        }
      }]
    }],
      },
      {
    children: [
      {
        component: LoginComponent,
        path: ''
      }
    ],
    component: LayoutLoginComponent,
    path: 'login',
  },
      {
          path: 'report',
          component: ReportComponent,
      },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
