import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() { }
items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Subscription',
            icon: 'pi pi-fw pi-plus'
          },  
          { 
            label: 'Email',
            icon: 'pi pi-fw pi-pencil'
          }
        ]
      },
      {
        label: 'Personal',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
          label: 'Mile Stones'
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
        items: [
          { label: 'Curriculum Vitae', icon: 'pi pi-fw pi-refresh' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
          { label: 'Accolades', icon: 'pi pi-fw pi-refresh' },
          { label: 'Non Profit', icon: 'pi pi-fw pi-refresh' },
          { label: 'Local Business', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-pencil',
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
          { label: 'Activities', icon: 'pi pi-fw pi-refresh' },
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
          }        ]
      },
      {
        label: 'Resources',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Blog', icon: 'pi pi-fw pi-trash' },
          { label: 'Learning', icon: 'pi pi-fw pi-refresh' },
          { label: 'Projects', icon: 'pi pi-fw pi-refresh' },
          { label: 'Newsletter', icon: 'pi pi-fw pi-refresh' },
          { label: 'Projects', icon: 'pi pi-fw pi-refresh' },        ]
      }
    ]
  }
}