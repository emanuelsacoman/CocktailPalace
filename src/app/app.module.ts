import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { HeadComponent } from './view/head/head.component';
import { environments } from 'src/environments/environments';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environments.firebase)),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environments.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
