import { Component, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import template from './mrg.html';

@Component({
    selector: 'personal-website',
    template
})
export class MRGComponent {
    constructor(private zone: NgZone, private snackBar: MatSnackBar) {}

    ngOnInit() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.getRegistration('service-worker.js').then(registration => {
                    registration.onupdatefound = (event) => {
                        this.zone.run(() => {
                            const snackRef = this.snackBar.open('New version of app available', 'Refresh');
                            snackRef.onAction().subscribe(() => location.reload());
                        });
                    }
                })
            });
        }
    }
}