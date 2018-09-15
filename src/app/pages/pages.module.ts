import { NgModule } from '@angular/core';


//Importar Modulos
import { ShareModule } from '../share/share.module';

import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

//ng2 -charts
import { ChartsModule } from 'ng2-charts';


//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
        declarations:[
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            IncrementadorComponent,
            GraficoDonaComponent
        ],
        exports:[
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graficas1Component
            
        ],
        imports:[
            ShareModule,
            PAGES_ROUTES,
            FormsModule,
            ChartsModule
        ]
})
export class PagesModule{}