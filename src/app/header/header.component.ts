import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  display = false;

  constructor(public route: Router) { }

  showDialog() {
    this.display = true;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        icon: 'pi pi-fw pi-pencil',
        command: (onclick) => { this.route.navigate(['/personal']); },
        items: [{
          label: 'Mile Stone',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Life' },
            { label: 'Family' },
            { label: 'Friends' }
          ]
        },
        { label: 'Location' },
        { label: 'Finance' },
        { label: 'Status' },
        { label: 'Goals' },
        { label: 'Calendar' }

        ]
      },
      {
        label: 'Professional',
        icon: 'pi pi-fw pi-pencil',
        command: (onclick) => { this.route.navigate(['/professional']); },
        items: [
          { label: 'Curriculum Vitae', icon: 'pi pi-fw pi-refresh' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
          { label: 'Accolades', icon: 'pi pi-fw pi-refresh' },
          { label: 'Non Profit', icon: 'pi pi-fw pi-refresh' },
          { label: 'Local Business', icon: 'pi pi-fw pi-refresh' },
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-pencil',
        command: (onclick) => { this.route.navigate(['/about']); },
        items: [
          { label: 'Contact', icon: 'pi pi-fw pi-trash' },
          { label: 'Ethics', icon: 'pi pi-fw pi-refresh' },
          { label: 'Books', icon: 'pi pi-fw pi-refresh' },
          { label: 'Influences', icon: 'pi pi-fw pi-refresh' },
          { label: 'Time Line', icon: 'pi pi-fw pi-refresh' },
          {
            label: 'Pursuits', icon: 'pi pi-fw pi-refresh',
            items: [
              {
                label: 'Food'
              }
            ]
          },
          { label: 'Activities', icon: 'pi pi-fw pi-refresh', },
          {
            label: 'Social', icon: 'pi pi-fw pi-refresh',
            items: [{
              label: 'Twitter',
              icon: ''
            },
            {
              label: 'Keybase',
              icon: ''
            },
            {
              label: 'Email',
              icon: ''
            }]
          },

        ]
      },
      {
        label: 'Resources',
        icon: 'pi pi-fw pi-pencil',
        command: (onclick) => { this.route.navigate(['/resources']); },
        items: [
          { label: 'Blog', icon: 'pi pi-fw pi-trash' },
          { label: 'Learning', icon: 'pi pi-fw pi-refresh' },
          { label: 'Projects', icon: 'pi pi-fw pi-refresh' },
          { label: 'Newsletter', icon: 'pi pi-fw pi-refresh' },
        ]
      }
    ];
  }

  login() {
    this.route.navigate(['workbench']);
    this.display = false;
  }
}
