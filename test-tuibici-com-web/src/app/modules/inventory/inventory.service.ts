import { Injectable } from '@angular/core';

import { IInventory } from './inventory-list/interfaces/inventory.interface';

import { inventoryMock } from '../../shared/mocks/inventory.mock';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  /**
   * @description This method is to send request to get the available inventory list items
   * 
   * @author Diego Mauricio Cortés
   * @sprint 1
   */
  getAvailableInventoryList(): IInventory[] {
    return inventoryMock;
  }
}
