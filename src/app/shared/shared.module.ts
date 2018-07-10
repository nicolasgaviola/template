import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumsComponent
    ],
    imports: []
})

export class SharedModule { }
