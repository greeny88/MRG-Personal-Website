import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MRGModule } from './app/mrg.module';

if (PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MRGModule);