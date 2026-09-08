import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [{
    path: 'bio',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
}, {
    path: 'projects',
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
}, {
    path: 'resume',
    loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent)
}, {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
