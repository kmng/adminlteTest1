import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgxAdminLteModule } from 'ngx-admin-lte';

import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routes';
import { ReportComponent } from './pages/report/report.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderWidgetComponent } from './widgets/header-widget/header-widget.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    HomeComponent,
    ReportComponent,
    LoginComponent,
    HeaderWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxAdminLteModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
