import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { ChartsModule } from 'ng2-charts';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficosDonaComponent } from '../components/graficos-dona/graficos-dona.component';

@NgModule({
    declarations: [
        PagesComponent,
        DahsboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficosDonaComponent,
        IncrementadorComponent
    ],
    exports: [
        DahsboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }
