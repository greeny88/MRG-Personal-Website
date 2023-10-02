import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutesModule } from './project-routes.module';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        ProjectsRoutesModule
    ],
    declarations: [
        ProjectsComponent
    ]
})
export class ProjectsModule {}