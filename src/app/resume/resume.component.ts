import { Component } from '@angular/core';

interface Experience {
    name: string,
    address: string,
    positions: {
        duration: string,
        title: string,
        descriptors: string[]
    }[]
};

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
    experiences: Experience[];
    languages: string[];
    technologies: string[];

    constructor() {
        this.experiences = [{
            'name': 'TouchNet Inc',
            'address': '9801 Renner Boulevard, Lenexa, Kansas 66219',
            'positions': [{
                'duration': 'January 2024 - Present',
                'title': 'Manager, IT Data Operations',
                'descriptors': [
                    'Managed team of five individuals with positions of Salesforce Administrator, Software Engineer, Database Administrator, and Systems Administrator.',
                    'Ran regular stand-up meetings and one-on-one meetings.',
                    'Provided quarterly and annual reviews of all team members.',
                    'Reworked ticket management process for team and whole department in order to better track valuable metrics and promote faster ticket closure.',
                    'Provided code reviews for team members.',
                    'Continued Software Engineer duties as available.',
                ]
            },{
                'duration': 'August 2014 - January 2024',
                'title': 'Lead Software Engineer',
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
                ]
            },{
                'duration': 'August 2011 - August 2014',
                'title': 'Technical Lead',
                'descriptors': [
                    'Configured extraction process to pull details from a text file in order to display in customized bill statement pages.',
                    'Managed projects with outside partners in order to integrate their software with our own product sold to universities.',
                    'Created batch scripts to automate repetitive tasks related to installing and updating customer software.',
                ]
            }],
        }, {
            'name': 'National MS Society',
            'address': '7611 State Line Road, Kansas City, Missouri, 64114',
            'positions': [{
                'duration': 'July 2008 - September 2010',
                'title': 'System Operations Expert',
                'descriptors' : [
                    'Developed methods to streamline data entry for input into multiple CRM systems for our local chapter.',
                    'Updated and maintained our chapter website by researching new web development practices and worked with various staff to create a site that was informative and intuitive.',
                    'Worked with our corporate office and other staff across the nation to help create standard practice procedures for data, to do usability testing of new systems, and participated in frequent user calls to facilitate the process.',
                    'Serviced and updated employee computers including virus removal and hardware updates.'
                ]
            }]
        }];
        this.languages = [
            'Javascript',
            'TypeScript',
            'Python',
            'Java',
            'HTML',
            'CSS',
            'Sass',
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
            'GCP',
            'Ansible',
            'Terraform',
            'RabbitMQ',
            'Bamboo',
            'Karma',
            'Jasmine',
            'JUnit'
        ];
    }
}