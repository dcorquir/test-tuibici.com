import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    TooltipModule,
    RatingModule,
    ButtonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    TooltipModule,
    RatingModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
