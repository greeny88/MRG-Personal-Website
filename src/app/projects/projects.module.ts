import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutesModule } from './project-routes.module';

import './projects.scss';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        ProjectsRoutesModule
    ],
    declarations: [
        ProjectsComponent
    ]
})
export class ProjectsModule {}