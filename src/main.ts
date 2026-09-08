import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';


import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, AppRoutingModule, BrowserAnimationsModule)]
})
  .catch(err => console.error(err));
