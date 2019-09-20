import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Habits',
        icon: 'pi pi-fw pi-pencil',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus'
        },  
        {
        label: 'Current',
        icon: 'pi pi-fw pi-pencil',
        items: [ 
            { label: 'Sleep' },
            { label: 'Workout' },
            { label: 'Running' },
        ]
      },
      {
        label: 'Past',
        icon: 'pi pi-fw pi-pencil',
        items: [       
            { label: 'Sleep' },
            { label: 'Workout' },
            { label: 'Running' },
        ]
      }
        ]
      }, 
      {
        label: 'Deadlines',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Travel',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Note Book',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
            {
        label: 'Records',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Finance', icon: 'pi pi-fw pi-trash' },
          { label: 'Workout', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];

  }
}
