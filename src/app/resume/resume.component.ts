import { Component } from '@angular/core';

import template from './resume.html';

interface Experience {
    name: string,
    address: string,
    duration: string,
    descriptors: string[]
};

@Component({
    selector: 'resume',
    template
})
export class ResumeComponent {
    experiences: Experience[];
    languages: string[];
    technologies: string[];

    constructor() {
        this.experiences = [{
            'name': 'TouchNet Inc',
            'address': '9801 Renner Boulevard, Lenexa, Kansas 66219',
            'duration': 'August 2011 - Present',
            'descriptors': [
                'Built monitoring systems.',
                'Revamped the internal eBill process.'
            ]
        }, {
            'name': 'National MS Society',
            'address': '7611 State Line Road, Kansas City, Missouri, 64114',
            'duration': 'July 2008 - September 2010',
            'descriptors' : [
                'Managed multiple CMS.',
                'Data collection and entry.'
            ]
        }];
        this.languages = [
            'TypeScript',
            'Javascript',
            'Python',
            'Java',
            'HTML',
            'CSS',
            'XML',
            'XSLT',
            'Regex'
        ];
        this.technologies = [
            'Angular',
            'AngularJS',
            'Webpack',
            'Grunt',
            'Node.js',
            'RabbitMQ',
            'Bootstrap',
            'Material Design',
            'NPM',
            'Maven',
            'Jersey',
            'Sass',
            'SVN',
            'Git'
        ];
    }
}