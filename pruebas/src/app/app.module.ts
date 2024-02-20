import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAuth, getAuth } from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
