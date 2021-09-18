import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { PrimeNgModule } from '../../shared/modules/prime-ng/prime-ng.module';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  declarations: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ComponentModule
  ]
})
export class InventoryModule { }
