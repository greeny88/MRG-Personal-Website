import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutesModule } from './project-routes.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutesModule
    ],
    declarations: [
        ProjectsComponent
    ]
})
export class ProjectsModule {}