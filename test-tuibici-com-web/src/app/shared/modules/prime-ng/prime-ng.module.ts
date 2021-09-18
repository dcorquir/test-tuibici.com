import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    TooltipModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
