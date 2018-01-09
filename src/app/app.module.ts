import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgxAdminLteModule } from 'ngx-admin-lte';

import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routes';
import { ReportComponent } from './pages/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    HomeComponent,
    ReportComponent,
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
