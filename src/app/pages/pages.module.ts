import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DahsboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DahsboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
