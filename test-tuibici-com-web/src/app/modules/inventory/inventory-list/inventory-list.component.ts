import { Component, OnInit } from '@angular/core';

import { IInventory } from './interfaces/inventory.interface';

import { InventoryService } from '../inventory.service';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  public inventoryListObject: IInventory[] = [];

  constructor(
    public inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.getAvailableInventoryList();
  }

  /**
   * @description This method is to prepare inventory list items to show
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getAvailableInventoryList(): void {
    this.inventoryListObject = this.inventoryService.getAvailableInventoryList();
    console.log("INV", this.inventoryListObject);
  }

}
