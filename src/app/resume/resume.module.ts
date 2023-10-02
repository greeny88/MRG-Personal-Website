import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { ResumeRoutesModule } from './resume-routes.module';

@NgModule({
    imports: [
        CommonModule,
        ResumeRoutesModule
    ],
    declarations: [
        ResumeComponent
    ]
})
export class ResumeModule {}