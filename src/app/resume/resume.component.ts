import { Component } from '@angular/core';

import template from './resume.html';

interface Experience {
    name: string,
    address: string,
    duration: string,
    title: string,
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
            'title': 'Senior Software Engineer',
            'descriptors': [
                'Created multiple, interconnected web apps used for maintaining information about customers, services, and monitoring processes, along with searching for and downloading log files related to those items.',
                'Constructed a REST api for use by various web apps and automation scripts, along with maintaining the relational database that houses the data accessed by this web service.',
                'Built a metric collection process and monitoring system tracking 10K of processes every few minutes managed by an AMQP engine.',
                'Created an access governance system for the security department that collects, relates and tracks login information across different internal and external systems used by our company employees.',
                'Developed scripts to automate routine processes done by various departments across different datacenters.',
                'Helped implement an infrastructure-as-code tool for a new datacenter as part of a migration from an existing, on-premise datacenter to a hosted, virtual environment.',
                'Created multiple ETLs for getting data in and out of our secure datacenter for use in reporting and analytics.',
                'Migrated svn projects to git.',
                'Took previously built CI/CD processes from Bamboo and moved them to GCP using Cloud Build and Artifact Repository.',
                'Built Apex Salesforce classes in use on Visualforce pages and in Lightning components on our client community.',
                'Worked in Professional Services building eBill statements for universities along with installing and configuring software for them that ran in our datacenter and on their campus.',
                'Managed projects with outside partners in order to integrate their software with our own product sold to universities.'
            ]
        }, {
            'name': 'National MS Society',
            'address': '7611 State Line Road, Kansas City, Missouri, 64114',
            'duration': 'July 2008 - September 2010',
            'title': 'System Operations Expert',
            'descriptors' : [
                'Developed methods to streamline data entry for input into multiple CRM systems for our local chapter.',
                'Updated and maintained our chapter website by researching new web development practices and worked with various staff to create a site that was informative and intuitive.',
                'Worked with our corporate office and other staff across the nation to help create standard practice procedures for data, to do usability testing of new systems, and participated in frequent user calls to facilitate the process.',
                'Serviced and updated employee computers including virus removal and hardware updates.'
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
            'SQL',
            'Regular Expressions',
            'Shell',
            'Apex (Salesforce)'
        ];
        this.technologies = [
            'Angular',
            'AngularJS',
            'Bootstrap',
            'Material Design',
            'NPM',
            'Maven',
            'Jersey',
            'Node.js',
            'Webpack',
            'Grunt',
            'SVN',
            'Git',
            'MSSQL',
            'PostGres',
            'RabbitMQ',
            'Sass',
            'GCP',
            'Ansible',
            'Terraform',
            'Bamboo',
            'Karma',
            'Jasmine',
            'JUnit'
        ];
    }
}