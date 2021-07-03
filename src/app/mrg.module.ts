import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutesModule } from './app-routes.module';
import { MRGComponent } from './mrg.component';
import { PageNotFoundComponent } from './page-not-found.component';

import './theme.scss';
import './mrg.scss';

@NgModule({
    declarations: [
        MRGComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        AppRoutesModule
    ],
    bootstrap: [
        MRGComponent
    ]
})
export class MRGModule {}