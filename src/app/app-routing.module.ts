import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [{
    path: 'bio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
}, {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
}, {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
