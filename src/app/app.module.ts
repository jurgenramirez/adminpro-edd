import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeadearComponent } from './share/headear/headear.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './share/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    HeadearComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    RegisterComponent,

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
