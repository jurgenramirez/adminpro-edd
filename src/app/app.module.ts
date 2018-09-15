
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';3
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
    
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
