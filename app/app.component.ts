import { Component } from '@angular/core';

import { NavItem } from './nav-item';
// import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navItems: NavItem[] = [
    {
      text: 'Inventory',
      value: 'Inventory',
      subItems: [
        {
          text: 'Cycle Count',
          value: 'Cycle Count',
          subItems: [
            {
              text: 'Approve Variance',
              value: 'Approve Variance',
            },
            {
              text: 'Review',
              value: 'Review',
            },
            {
              text: 'Search Cycle Count',
              value: 'Search Cycle Count',
            },
            {
              text: 'Search Cycle Count (New)',
              value: 'Search Cycle Count (New)',
            },
          ],
        },
        {
          text: 'Inventory Transaction',
          value: 'Inventory Transaction',
        },
        {
          text: 'Item Location Preference',
          value: 'Item Location Preference',
        },
        {
          text: 'Item Update',
          value: 'Item Update',
        },
        {
          text: 'Locations',
          value: 'Locations',
        },
        {
          text: 'Search Item',
          value: 'Search Item',
        },
        {
          text: 'Stock Status',
          value: 'Stock Status',
        },
      ],
    },
  ];
}
