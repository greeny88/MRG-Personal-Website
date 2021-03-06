import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home-routes.module';

import './home.scss';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutesModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}