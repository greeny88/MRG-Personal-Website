import { Component } from '@angular/core';

import template from './projects.html';

import ffb1 from './images/ffb-1.png';
import ffb2 from './images/ffb-2.png';
import ffb3 from './images/ffb-3.png';
import rrt1 from './images/rrt-1.png';
import rrt2 from './images/rrt-2.png';
import dhs1 from './images/dhs-1.png';
import dhs2 from './images/dhs-2.png';

interface Project {
    name: string,
    images: string[],
    description: string,
    url?: string
}

@Component({
    selector: 'projects',
    template
})
export class ProjectsComponent {
    projects: Project[];

    constructor() {
        this.projects = [{
            'name': 'Freeblades Freeband Builder',
            'description': 'This webapp suppliments a tabletop skirmish game called Freeblades. In Freeblades, two people fight over objectives or in eliminating the opposing Freeband over the course of a single gaming session. This app helps in the construction of these freebands by doing all of the checks and calculations for you. Multiple considerations were made in designing this app such as Service Workers to eliminate requests for return visitors, IndexedDB tables to save the freeband in the browser to prevent loss of work and to provide a starting point if returning later to finish construction, and download/load option for saving the freeband offline. There are still plans to expand the pre-built options available, a more streamlined "campaign mode" for tracking freeband changes over the course of multiple sessions, and to build a character creator page for additional customization options.',
            'images': [ ffb1, ffb2, ffb3 ]
        },{
            'name': 'Rainbow Road Trip',
            'description': 'Rainbow Road Trip is built based on a car game invented by my kids. In the game, you call out the color of cars as you see them in order to get a rainbow (1 each of the 6 primary colors). Expanding on that, this app awards points for different car colors plus extra points for each car rainbow collected. At some point, it will be expanded to include more customization options to the colors available and the points awarded along with incorporating extra rules that can be enabled for each play.',
            'images': [ rrt1, rrt2 ]
        },{
            'name': 'Disney Hide-n-Seek',
            'description': 'I took the family to Disney World during the pandemic but that unfortunately meant that things like character autographs in the parks were no longer happening. I built this app in order to recreate some of that experience for my kids. In the app, it shows a name and a dark silhouette of a character that might show up in the park. The kids were then to click the character button once they find them somewhere in the park. By the end of the trip, they could visit the site to see all of the characters they had found and visited. This site used Service Workers so that the app could be preloaded on devices without needing an internet connection. IndexedDB was used to save the selections each time a character was selected/deselected in order to prevent lose of selection, session to session.',
            'images': [ dhs1, dhs2 ]
        }];
    }
}