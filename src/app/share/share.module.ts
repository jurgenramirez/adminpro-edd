import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeadearComponent } from './headear/headear.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations:[
          BreadcrumbsComponent,
          HeadearComponent,
          NopagefoundComponent,
          SidebarComponent  
    ],
    exports:[
          BreadcrumbsComponent,
          HeadearComponent,
          NopagefoundComponent,
          SidebarComponent  
    ]
})
export class ShareModule{}